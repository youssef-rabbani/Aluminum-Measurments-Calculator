import React from "react";
import { Button, Box, Grid, makeStyles } from "@material-ui/core";
import { Formik, Form, Field } from "formik";
import { TextField } from "formik-material-ui";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(3),
    paddingTop: theme.spacing(2),
    margin: theme.spacing(2)
  },
  item: {
    padding: "30px 25px 0px",
    marginbottom: "12px"
  },
  field: {
    width: "100%"
  },
  submit: {
    height: "34px",
    marginTop: theme.spacing(1)
  },
  input: {
    textAlign: "right"
  }
}));

function App() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Formik
        initialValues={{
          height: "",
          width: "",
          v1: "",
          v2: "",
          v3: "",
          v4: "",
          v5: "",
          v6: "",
          v7: ""
        }}
        validate={(values) => {
          const errors = {};
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(false);
        }}
      >
        {({
          submitForm,
          handleReset,
          handleChange,
          setFieldValue,
          values,
          isSubmitting,
          touched,
          errors
        }) => (
          <Form>
            <Grid container>
              <Grid item xs={6} className={classes.item}>
                <Box margin={1}>
                  <Field
                    component={TextField}
                    className={classes.input}
                    name="height"
                    type="text"
                    label="طول"
                    helperText="الرجاء أدخل طول"
                    onChange={(e) => {
                      handleChange(e);
                      setFieldValue("v1", parseFloat(e.target.value) + 5);
                      setFieldValue("v3", parseFloat(e.target.value) - 5.8);
                      setFieldValue("v5", parseFloat(e.target.value) - 3.3);
                      setFieldValue("v6", parseFloat(e.target.value) - 4);
                    }}
                  />
                </Box>
              </Grid>
              <Grid item xs={6} className={classes.item}>
                <Box margin={1}>
                  <Field
                    component={TextField}
                    name="width"
                    type="text"
                    label="عرض"
                    helperText="الرجاء أدخل عرض"
                    onChange={(e) => {
                      handleChange(e);
                      setFieldValue("v2", parseFloat(e.target.value) - 3);
                      setFieldValue(
                        "v4",
                        (parseFloat(e.target.value) - 2.2) / 2
                      );
                      setFieldValue(
                        "v7",
                        (parseFloat(e.target.value) - 2.2) / 2 + 1
                      );
                    }}
                  />
                </Box>
              </Grid>
              <Grid item xs={12} className={classes.item}>
                <Box margin={1}>
                  <Field
                    component={TextField}
                    name="v1"
                    disabled
                    type="text"
                    label="جنب"
                    helperText="الرجاء أدخل جنب"
                  />
                </Box>
              </Grid>
              <Grid item xs={12} className={classes.item}>
                <Box margin={1}>
                  <Field
                    component={TextField}
                    name="v2"
                    disabled
                    type="text"
                    label="سكة"
                    helperText="الرجاء أدخل سكة"
                  />
                </Box>
              </Grid>
              <Grid item xs={12} className={classes.item}>
                <Box margin={1}>
                  <Field
                    component={TextField}
                    name="v3"
                    disabled
                    type="text"
                    label="مسكة و شنجل"
                    helperText="الرجاء أدخل مسكة و شنجل"
                  />
                </Box>
              </Grid>
              <Grid item xs={12} className={classes.item}>
                <Box margin={1}>
                  <Field
                    component={TextField}
                    name="v4"
                    disabled
                    type="text"
                    label="كعب"
                    helperText="الرجاء أدخل كعب"
                    onChange={(e) => {
                      handleChange(e);
                    }}
                  />
                </Box>
              </Grid>
              <Grid item xs={12} className={classes.item}>
                <Box margin={1}>
                  <Field
                    component={TextField}
                    name="v5"
                    disabled
                    type="text"
                    label="يو"
                    helperText="الرجاء أدخل يو"
                  />
                </Box>
              </Grid>
              <Grid item xs={12} className={classes.item}>
                <Box margin={1}>
                  <Field
                    component={TextField}
                    name="v6"
                    disabled
                    type="text"
                    label="طول منخل"
                    helperText="الرجاء أدخل طول منخل"
                  />
                </Box>
              </Grid>
              <Grid item xs={12} className={classes.item}>
                <Box margin={1}>
                  <Field
                    component={TextField}
                    name="v7"
                    disabled
                    type="text"
                    label="عرض منخل"
                    helperText="الرجاء أدخل عرض منخل"
                  />
                </Box>
              </Grid>
              {isSubmitting}
            </Grid>
            <Button color="primary" onClick={handleReset}>
              Reset
            </Button>
          </Form>
        )}
      </Formik>
    </React.Fragment>
  );
}
export default App;
