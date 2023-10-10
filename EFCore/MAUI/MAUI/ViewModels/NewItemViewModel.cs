using DevExpress.Maui.DataForm;
using MAUI.Models;
using System.Collections.ObjectModel;

namespace MAUI.ViewModels {
	public class NewItemViewModel : BaseViewModel {
		public const string ViewName = "NewItemPage";
		string _title;
		string _content;

        public List<Item> ReportBy { get; set; }
        public List<Item> ReportType { get; set; }
        public List<Item> Periode { get; set; }


        public NewItemViewModel() {

			ReportBy = new List<Item>()
			{
				new Item { ItemName = "Payroll" }
			};
			ReportType = new List<Item>()
			{
				new Item { ItemName = "EstimateSalary" }
			};
			Periode = new List<Item>(){
				new Item { ItemName = "AGS 2023" }
            };

			SaveCommand = new Command(OnSave, ValidateSave);
			CancelCommand = new Command(OnCancel);
			PropertyChanged += (_, __) => SaveCommand.ChangeCanExecute();
		}

		public new string Title {
			get => _title;
			set => SetProperty(ref _title, value);
		}

		public string Content {
			get => _content;
			set => SetProperty(ref _content, value);
		}

		[DataFormDisplayOptions(IsVisible = false)]
		public Command SaveCommand { get; }

		[DataFormDisplayOptions(IsVisible = false)]
		public Command CancelCommand { get; }


		bool ValidateSave() 
			=> !String.IsNullOrWhiteSpace(_title) && !String.IsNullOrWhiteSpace(_content);

		async void OnCancel() 
			=> await Navigation.GoBackAsync();

		async void OnSave() {
			await DataStore.AddItemAsync(new Post() {
				Title = Title,
				Content = Content
			});
			
			await Navigation.NavigateToAsync<ItemsViewModel>();
		}
	}

	public class Item
	{
        public string ItemName { get; set; }
    }

}