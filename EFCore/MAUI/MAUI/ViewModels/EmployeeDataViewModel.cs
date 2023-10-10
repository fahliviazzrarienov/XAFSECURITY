using MAUI.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MAUI.ViewModels
{
    public class EmployeeDataViewModel : INotifyPropertyChanged {

        readonly EmployeeData data;

        public event PropertyChangedEventHandler PropertyChanged;
        public IReadOnlyList<Employee> Employees { get => data.Employees; }

        public EmployeeDataViewModel()
        {
            data = new EmployeeData();
        }

        protected void RaisePropertyChanged(string name)
        {
            if (PropertyChanged != null)
                PropertyChanged(this, new PropertyChangedEventArgs(name));
        }

    }
}
