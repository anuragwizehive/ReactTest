import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import CreateNewForm from "../routes/CreateNewForm";
import { initiateNewForm } from "../store/formDataSlice";

const CreateForm = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initiateNewForm({ id: 1 }));
  }, []);

  return (
    <div>
      <CreateNewForm id={1} />
    </div>
  );
};

export default CreateForm;
