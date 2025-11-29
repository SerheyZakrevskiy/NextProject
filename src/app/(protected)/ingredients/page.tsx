import IngredientsTable from "@/components/UI/tables/ingredients";
import IngredientsForm from "@/forms/ingredient.form";

const ingredientsPage = () => {
  return (
    <div>
      <IngredientsForm></IngredientsForm>
      <IngredientsTable></IngredientsTable>
    </div>
  );
};

export default ingredientsPage;
