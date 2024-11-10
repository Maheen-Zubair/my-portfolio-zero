import Link from "next/link";

export default function Header() {
    return (
        <div>
            <div className=" flex justify-end bg-customgray3 h-8 text-white gap-3 pr-3 text-base pt-1">
                <Link href={"/"}> Home  </Link>
                <Link href={"#Portfolio"}>About Me</Link>
                <Link href={"#Services"}>Services </Link>
                <Link href={"#Projects"}>Projects </Link>
                <Link href={"#Contact"}>Contact</Link>
            </div>
        </div>
    );
}
