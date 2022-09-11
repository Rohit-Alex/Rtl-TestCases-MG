import React, { useState } from "react";
import { Menu, Dropdown, Button } from "antd";
import Checkbox from "antd/lib/checkbox/Checkbox";
import ProfileOutlined from "@ant-design/icons/ProfileOutlined";

const Drpdwn = ({columnList}) => {
    const [selectedValues, setSelectedValues] = useState([]);
    const [isVisible, setIsVisible] = useState(false);
    const handleChange = ({ key }) => {
        setSelectedValues((prev) => {
            const cloned = [...prev];

            const idx = cloned.findIndex((e) => e === key);
            if (idx !== -1) cloned.splice(idx, 1);
            else cloned.push(key);

            return cloned;
        });
    };
    const menu = (
        <Menu
            onClick={handleChange}
            items={columnList.map((e) => ({
                label: (
                    <Checkbox
                        data-testid={`${e.dataIndex}-data-testid`}
                        key={e.dataIndex}
                        checked={selectedValues.includes(e.key)}
                    >
                        {e.title}
                    </Checkbox>
                ),
                key: e.key
            }))}
        />
    );
    return (
        <>
        <Dropdown
            onClick={() => setIsVisible(true)}
            overlay={menu}
            visible={isVisible}
            onVisibleChange={(visible) => {
                setIsVisible(false)
            }}
            // data-testid='drpdwn'
        >
            <Button
                type="default"
                data-testid='drpdwn'
                icon={<ProfileOutlined style={{ fontSize: "24px", border: "none" }} />}
            />
        </Dropdown>
        </>
    );
};
export default Drpdwn