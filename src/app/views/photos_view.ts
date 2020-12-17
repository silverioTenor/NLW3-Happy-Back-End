import Photo from '../models/Photos';

export default {
  render(photo: Photo) {
    return {
      id: photo.id,
      url: `http://localhost:3333/uploads/${photo.path}`
    }
  },
  renderMany(Photos: Photo[]) {
    return Photos.map(photo => this.render(photo));
  }
}