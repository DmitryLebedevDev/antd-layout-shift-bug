'use client'
import { Button, Cascader, DatePicker, Select, Space } from "antd";
import { FilterFilled, SearchOutlined } from "@ant-design/icons";
const { Compact } = Space

export default function HomeClient() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Compact>
        <Select placeholder="test" className="w-[150px]">

        </Select>
        <Button>
          test
        </Button>
        <Select placeholder="test" className="w-[150px]">

        </Select>
        <Button type="primary">
          test
        </Button>
      </Compact>
      
    </main>
  );
}
