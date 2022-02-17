import styles from "../styles/Home.module.css";
import Image from "next/image";
import { ProductModel } from "../models";
import Link from "next/link";

interface IProps {
  data: ProductModel;
}

const ItemProduct = (props: IProps) => {
  const { data } = props;

  return (
    <Link href={`/${data.id}`}>
      <a className={styles.card}>
        <Image src={data.thumbnail} alt={data.name} width={300} height={300} />
        <h2>{data.name} &rarr;</h2>
        <p>{data.description}</p>
      </a>
    </Link>
  );
};

export default ItemProduct;
