export interface Load {

    title: string;
    phonenumber:String;
    email:String;
    about: string[];
    carousal: string[];
    products: Products[];
}

export interface Products {
    product:String;
    caption:String;
}