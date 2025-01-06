
'use client'


import { Button, List, Avatar } from "antd";
import data from '../data'
import Link from "next/link";

export default function Home() {
  return (
    <div>
        <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item, index) => (
        <List.Item>
            <List.Item.Meta
            avatar={<Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`} />}
            title={<Link href={`/home/${item.id}`}>{item.title}</Link>}
            description={`${item.body}`}
            />
        </List.Item>
    )}
  />
    </div>
  );
}
