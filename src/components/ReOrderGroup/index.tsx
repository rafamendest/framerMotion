import { Reorder } from "framer-motion";
import { useState } from "react";
import "./style.css";

const initialItems = ["🐕‍🦺 Cachorro", "🦨 Gambá", "🐿️ Esquilo", "🐦 Pássaro"]

const ReOrderGroup = () => {


  const [items, setItems] = useState(initialItems);

  return (
    <div className="reOrder">
      <Reorder.Group axis="y" values={items} onReorder={setItems}>
        {items.map((item) => (
          <Reorder.Item key={item} value={item}>
            {item}
          </Reorder.Item>
        ))}
      </Reorder.Group>

      <div style={{ marginTop: "200px" }}>{items}</div>
    </div>
  );
};

export default ReOrderGroup;
