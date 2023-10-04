using MAUI.Models;
namespace MAUI.Services {
	public interface IDataStore<T> {
        Task<T> GetItemAsync(string id);
        Task<byte[]> GetAuthorPhotoAsync(Guid postId);
        Task<bool> UserCanCreatePostAsync();
        Task<T> AddItemAsync(Post post);

		Task<IEnumerable<T>> GetItemsAsync(bool forceRefresh = false);

		Task ArchivePostAsync(T post);

		Task ShapeIt();

    }
}