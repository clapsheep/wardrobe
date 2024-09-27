export default function Layout({
  children,
  dressroomModal,
}: {
  children: React.ReactNode;
  dressroomModal: React.ReactNode;
}) {
  return (
    <section>
      {children}
      {dressroomModal}
    </section>
  );
}
