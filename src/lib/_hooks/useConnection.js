import { useEffect, useState } from "react";

const noconnectedAttr = "no-connection";

const useConnection = () => {
  const [isConnected, setConnected] = useState(true);

  useEffect(() => {
    setConnected(!document.body.hasAttribute(noconnectedAttr));
  }, []);

  useEffect(() => {
    document.body[!isConnected ? "setAttribute" : "removeAttribute"](noconnectedAttr, "");
  }, [isConnected]);

  return { isConnected, setConnected };
};

export default useConnection;
