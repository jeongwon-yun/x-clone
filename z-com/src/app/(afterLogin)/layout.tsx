import {ReactNode} from "react";

interface Props {
    children: ReactNode;
}

export default async function AfterLoginLayout({children}: Props) {
    return (
        <div>에프터 로그인 레이아웃
            {children}</div>
    )
}