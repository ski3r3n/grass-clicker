import Image from "next/image";

export default function Home() {
    return (
        <>
            <div className="w-full h-screen bg-[url('/image.png')] bg-cover absolute opacity-50 z-[-4]"></div>
            <h1 className="text-7xl m-auto w-fit h-fit pt-9">Grass Clicker</h1>
            <p className="m-auto w-fit h-fit text-3xl">
                Grass count: <span id="grasscount">0</span>
            </p>
            <p className="m-auto w-fit h-fit text-3xl">
                Per second: <span id="persecond">0</span>
            </p>
            <table className="w-full">
                <tr>
                    <th>
                        <button className="w-[200px] h-[350px] bg-green-100">GRASS</button>
                    </th>
                    <th>sliers</th>
                </tr>
            </table>
        </>
    );
}
