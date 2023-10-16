export class Store {
    id: number;
    name: string;
    rating: number;
    status: string;
    image: string;
    banner: string;
    discount: any;
    time: string;
  
    constructor(
        id: number,
        name: string,
        rating: number,
        status: string,
        image: string,
        banner: string,
        discount: any,
        time: string
    ) {
      this.id = id;
      this.name = name;
      this.rating = rating;
      this.status = status;
      this.image = image;
      this.banner = banner;
      this.discount = discount;
      this.time = time;
    }
  }
  