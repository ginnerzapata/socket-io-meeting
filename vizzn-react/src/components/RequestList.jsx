import { Card, List, Row, Col, Button } from "antd";
import React, { useState, useEffect, useContext } from "react";
import { SocketContext } from "../context/SocketContext";

export const RequestList = () => {
  const [data, setData] = useState([]);
  const { socket } = useContext(SocketContext);

  useEffect(() => {
    socket.on("request-list", (requests) => setData(requests));
  }, [socket]);

  const handleRemove = (id) => {
    socket.emit("delete-request", id);
  };
  return (
    <Card title="My Requests">
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              title={<strong>{item.title}</strong>}
              description={`Created by ${item.createdBy} at ${item.createdAt}`}
            />

            <Button type="primary" danger onClick={() => handleRemove(item.id)}>
              X
            </Button>
          </List.Item>
        )}
      />
    </Card>
  );
};
