export default class Expression {
  descirption: string;
  imgUrl: string;
  title: string;
  price: string;
  constructor(title, imgUrl, price, description) {
    this.descirption = description;
    this.imgUrl = imgUrl;
    this.title = title;
    this.price = price;
  }
}
