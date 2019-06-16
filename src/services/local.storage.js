import omit from "lodash/omit";

class StorageService {
  recents = [];
  favorites = {};

  constructor() {
    this.recents = JSON.parse(localStorage.getItem("recents") || "[]");
    this.favorites = JSON.parse(localStorage.getItem("favorites") || "{}");
  }

  addLocationToRecents(location) {
    const isExist = this.recents.some(item => item.id === location.id);
    if (!isExist) {
      if (this.recents.length === 5) {
        this.recents.shift();
        this.recents = [...this.recents, location];
      } else {
        this.recents = [...this.recents, location];
      }
    }
    localStorage.setItem("recents", JSON.stringify(this.recents));
  }

  addPropertyToFavorites(property) {
    this.favorites = { ...this.favorites, [property.id]: property };
    localStorage.setItem("favorites", JSON.stringify(this.favorites));
  }

  removePropertyFromFavorites(property) {
    this.favorites = omit(this.favorites, [property.id]);
    localStorage.setItem("favorites", JSON.stringify(this.favorites));
  }
}

export default new StorageService();
