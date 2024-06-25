export interface Product {
    objectID: string;
    image: string;
    title: string;
    description: string;
    price: number;
    rating: {
      rate: number;
      count: number;
    };
  }
  
  export interface CartItem extends Product {
    quantity: number;
  }
  
  export interface CartContextType {
    cart: CartItem[];
    addToCart: (product: Product) => void;
    loading:boolean
    error:  string | null;
    setCart: (product: any) => void;
  }
  