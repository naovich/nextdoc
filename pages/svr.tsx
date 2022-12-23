import { useRouter } from "next/router";

function Svr() {
  const router = useRouter();

  return (
    <div>
      <p>Le nom du serveur est {JSON.stringify(router)}</p>
    </div>
  );
}

export default Svr;
