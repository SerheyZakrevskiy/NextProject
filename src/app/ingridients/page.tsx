import IngredientsTable from "@/components/UI/tables/ingredients";
import IngredientsForm from "@/forms/ingredient.form";

const ingridientsPage = () => {
  return (
    <div>
      <IngredientsForm></IngredientsForm>
      <IngredientsTable></IngredientsTable>
    </div>
  );
};

export default ingridientsPage;
