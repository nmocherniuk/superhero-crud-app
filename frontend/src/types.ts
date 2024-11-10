export interface SuperheroData {
  id: number;
  name: string;
  imgSrc: string;
}

export interface SuperheroDetailsData {
  images: {
    id: number;
    url: string;
    alt: string;
  }[];
  nickname: string;
  real_name: string;
  origin_description: string;
  superpowers: string;
  catch_phrase: string;
}

export interface SuperheroAttribute {
  label?: string;
  value?: string;
  key: string;
  textArea?: boolean;
  type?: string;
}

export interface ActionButton {
  onClick?: (e: React.FormEvent) => void;
  children: React.ReactNode;
  bgColor: "red" | "white";
  color: "white" | "black";
  type?: "button" | "reset" | "submit";
  addClasses?: string;
}
