export class Store {
    id: number;
    name: string;
    rating: number;
    status: string;
    image: string;
    banner: string;
    discount: any;
    time: string;
    delivery: any;
  
    constructor(
        id: number,
        name: string,
        rating: number,
        status: string,
        image: string,
        banner: string,
        discount: any,
        time: string,
        delivery: any,
    ) {
      this.id = id;
      this.name = name;
      this.rating = rating;
      this.status = status;
      this.image = image;
      this.banner = banner;
      this.discount = discount;
      this.time = time;
      this.delivery = delivery;
    }
  }
  