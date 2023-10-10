using DevExpress.XtraReports.Wizards;
using MAUI.ViewModels;
using System.Collections.ObjectModel;

namespace MAUI.Views {
	[XamlCompilation(XamlCompilationOptions.Compile)]
	public partial class NewItemPage {

        public NewItemPage() {
			InitializeComponent();
            BindingContext = new NewItemViewModel();

        }

    }
}