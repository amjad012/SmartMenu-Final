import { observer } from "mobx-react-lite";
import { ChangeEvent, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button, FormField, Header, Label, Segment } from "semantic-ui-react";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { useStore } from "../../../app/stores/store";
import { v4 as uuid } from "uuid";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import MyTextInput from "../../../app/common/form/MyTextInput";
import MyDateInput from "../../../app/common/form/MyDateInput";
import { Table } from "../../../app/models/table";

export default observer(function TableForm() {
  const { tableStore } = useStore();
  const {
    selectedTable,
    createTable,
    updateTable,
    loading,
    loadTable,
    loadingInitial,
  } = tableStore;
  const { id } = useParams();
  const navigate = useNavigate();

  const [table, setTable] = useState<Table>({
    id: "",
    number:0,
    date:null,
  });

  const validationSchema = Yup.object({
    number: Yup.string().required("The Number is required"),
    date: Yup.string().required('Date is required').nullable(),
  });

  useEffect(() => {
    if (id) loadTable(id).then((table) => setTable(table!));
  }, [id, loadTable]);

  function handleFormSubmit(table:Table) {
      if (!table.id) {
          table.id = uuid();
          createTable(table).then(() => navigate(`/tables/${table.id}`))
      } else {
          updateTable(table).then(() => navigate(`/tables/${table.id}`))
      }
  }

  

  if (loadingInitial) return <LoadingComponent content="Loading table..." />;

  return (
    <Segment clearing>
      <Header content='Table Details' sub color='teal'/>
      <Formik
        validationSchema={validationSchema}
        enableReinitialize
        initialValues={table}
        onSubmit={(values) => handleFormSubmit(values)}
      >
        {({ handleSubmit, isValid,isSubmitting, dirty }) => (
          <Form className="ui form" onSubmit={handleSubmit} autoComplete="off">
           <MyTextInput name='number' placeholder='Number'/>
            <MyDateInput  
                placeholderText="Date"
                name="date" 
                showTimeSelect
                timeCaption='time'
                dateFormat='MMM d, yyyy h :mm aa'
             />
            <Button
              disabled={isSubmitting || !dirty || !isValid}
              loading={loading}
              floated="right"
              positive
              type="submit"
              content="Submit"
            />
            <Button
              as={Link}
              to="/tables"
              floated="right"
              type="button"
              content="Cancel"
            />
          </Form>
        )}
      </Formik>
    </Segment>
  );
});
