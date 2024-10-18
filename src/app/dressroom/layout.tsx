import { RegistItemStoreProvider } from "@/providers/registItem-store-provider";
import { RegistModalStoreProvider } from "@/providers/registModal-store-provider";

export default function Layout({
  children,
  dressroomModal,
}: {
  children: React.ReactNode;
  dressroomModal: React.ReactNode;
}) {
  return (
    <RegistItemStoreProvider>
      <RegistModalStoreProvider>
        {children}
        {dressroomModal}
      </RegistModalStoreProvider>
    </RegistItemStoreProvider>
  );
}
