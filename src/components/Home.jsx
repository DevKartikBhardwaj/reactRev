import Product from "./Product";
export default function Home() {
    const arr = [1, 2, 3, 4];
    return (
        <div>
            {
                arr.map((i) => {
                    return <Product value={i} key={i} />;
                })
            }
        </div>
    );
}
