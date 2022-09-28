﻿using System.Configuration;
using System.Diagnostics;
using Microsoft.EntityFrameworkCore;
using DevExpress.EntityFrameworkCore.Security;
using DevExpress.ExpressApp;
using DevExpress.ExpressApp.EFCore;
using DevExpress.ExpressApp.Security;
using DevExpress.Persistent.BaseImpl.EF.PermissionPolicy;
using BusinessObjectsLibrary.BusinessObjects;
using DatabaseUpdater;
using DevExpress.ExpressApp.DC;

// ## Step 0. Preparation. Create or update database
TypesInfo typesInfo = new TypesInfo();
string connectionString = ConfigurationManager.ConnectionStrings["ConnectionString"].ConnectionString;
CreateDemoData(connectionString, typesInfo);

// ## Step 1. Initialization. Create a Secured Data Store and Set Authentication Options
AuthenticationStandard authentication = new AuthenticationStandard();
SecurityStrategyComplex security = new SecurityStrategyComplex(typeof(PermissionPolicyUser), typeof(PermissionPolicyRole), authentication);
var objectSpaceProvider = new SecuredEFCoreObjectSpaceProvider<ApplicationDbContext>(security,
    (builder, _) => builder.UseSqlServer(connectionString).UseChangeTrackingProxies());

// ## Step 2. Authentication. Log in as a 'User' with an Empty Password
authentication.SetLogonParameters(new AuthenticationStandardLogonParameters(userName: "User", password: string.Empty));
IObjectSpace loginObjectSpace = objectSpaceProvider.CreateNonsecuredObjectSpace();
security.Logon(loginObjectSpace);

// ## Step 3. Authorization. Access and Manipulate Data/UI Based on User/Role Rights
Console.WriteLine($"{"Full Name",-40}{"Email",-40}");
using(IObjectSpace securedObjectSpace = objectSpaceProvider.CreateObjectSpace()) {
    // User cannot read protected entities like PermissionPolicyRole.
    Debug.Assert(securedObjectSpace.GetObjects<PermissionPolicyRole>().Count == 0);
    foreach(Employee employee in securedObjectSpace.GetObjects<Employee>()) { // User can read Employee data.
        // User can read Department data by criteria.
        bool canRead = security.CanRead(securedObjectSpace, employee, memberName: nameof(Employee.Email));
        Debug.Assert(!canRead == (employee.Email == null));
        // Mask protected property values when User has no 'Read' permission.
        var email = canRead ? employee.Email : "*******";
        Console.WriteLine($"{employee.FullName,-40}{email,-40}");
    }
}
security.Logoff();

Console.WriteLine("Press any key to exit...");
Console.ReadKey();

static void CreateDemoData(string connectionString, TypesInfo typesInfo) {
    using(var objectSpaceProvider = new EFCoreObjectSpaceProvider<ApplicationDbContext>(typesInfo, connectionString, 
        (builder, connectionString) => builder.UseSqlServer(connectionString).UseChangeTrackingProxies()))
    using(var objectSpace = objectSpaceProvider.CreateUpdatingObjectSpace(true)) {
        new Updater(objectSpace).UpdateDatabase();
    }
}

