'use client'

import { Button, List, Avatar } from "antd";
import data from '../../data'
import Link from "next/link";
import Item from "antd/es/list/Item";

export default function HomeID({params}: {params: {id: string}}) {
    if(params.id === ''){
        return
    }
    const aa = data.find(Item => Item.id === Number(params.id))
    return (
        <div>
            {aa?.body}
        </div>
    );
}

