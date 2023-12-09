import Image from "next/image";
import ProductList from "./components/ProductList";
import Input from "./components/Input";

export default function Home() {
  return (
    <main className="">
      <div className="p-4 bg-primary"></div>
      <div className="p-4 bg-primary-light"></div>
      <div className="p-4 bg-white text-primary font-serif">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores
        adipisci eum necessitatibus dignissimos possimus recusandae incidunt
        quasi minima perferendis, unde hic consequatur nulla! Dolor facilis
        nobis provident vitae placeat laudantium?
      </div>
      <div className="p-4 prose bg-white ">
        <h1>Lorem ipsum dolor sit.</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis?
        </p>
        <h2>Lorem ipsum dolor sit amet consectetur.</h2>
        <a>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam sit
          inventore ab delectus doloribus harum.
        </a>
      </div>
      <div className="p-4  prose-blue prose-sm">
        <h1>Lorem ipsum dolor sit.</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis?
        </p>
        <h2>Lorem ipsum dolor sit amet consectetur.</h2>
        <a>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam sit
          inventore ab delectus doloribus harum.
        </a>
      </div>
      <div className="bg-white p-4">
        <Input name="textbox" />
        <Input name="textbox" error />
        <Input name="textbox" success />
        <Input name="textbox" inverted />
      </div>
      <ProductList />
    </main>
  );
}
