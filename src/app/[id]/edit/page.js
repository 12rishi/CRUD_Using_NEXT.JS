import Form from "@/app/components/Form";

const Editpage = async ({ params }) => {
  const id = params?.id;

  return <Form type={"Edit"} id={id} />;
};
export default Editpage;
