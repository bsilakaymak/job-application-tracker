import useForm from "../hooks/useForm";
import Button from "./Button";
import Input from "./Input";
import RadioButton from "./RadioButton";
import Select from "./Select";
import TextArea from "./TextArea";
import { validationSchema } from "../validationSchema";
import selectOptions from "../selectOptions";
import { FormEvent, useContext } from "react";
import { JobContext } from "../context";
import { useLocation } from "react-router-dom";

const Form = () => {
  const { updateJob, createJob, currentJob } = useContext(JobContext);
  const isEdit = useLocation().pathname.split("/")[1] === "edit";
  const initialState = isEdit
    ? currentJob
    : {
        jobId: "",
        jobTitle: "",
        jobDescription: "",
        companyName: "",
        companyContact: "",
        appliedVia: "",
        status: "",
        remarks: "",
        open: false,
        feedback: "",
      };

  const { formData, errors, handleInputChange, validateForm } = useForm(
    initialState,
    validationSchema
  );

  console.log("errors", errors);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isFormValid = validateForm();
    if (!isFormValid) {
      return;
    }
    if (currentJob && isEdit) {
      updateJob(currentJob.jobId, formData);
    } else {
      createJob(formData);
    }
  };

  return (
    <form
      className="grid grid-cols-1 gap-4 p-5 md:p-20 md:grid-cols-2"
      onSubmit={(e) => handleSubmit(e)}
    >
      <Input
        error={errors.jobTitle}
        id="job-title"
        label="Job title"
        name="jobTitle"
        value={formData.jobTitle}
        onChange={(e) => handleInputChange(e)}
      />
      <Input
        error={errors.jobDescription}
        id="job-description"
        label="Job description"
        name="jobDescription"
        value={formData.jobDescription}
        onChange={handleInputChange}
      />
      <Input
        error={errors.companyName}
        id="company"
        label="Company"
        name="companyName"
        value={formData.companyName}
        onChange={handleInputChange}
      />
      <Input
        error={errors.companyContact}
        id="company-contact"
        label="Company contact"
        name="companyContact"
        value={formData.companyContact}
        onChange={handleInputChange}
      />
      <Input
        error={errors.appliedVia}
        id="applied-via"
        label="Applied via"
        name="appliedVia"
        value={formData.appliedVia}
        onChange={handleInputChange}
      />
      <div className="grid gap-1 2xl:grid-cols-2">
        <Select
          error={errors.status}
          options={selectOptions}
          name="status"
          onChange={handleInputChange}
          label="Status"
          id="applciation-status"
        />
        <div>
          Job status:
          <RadioButton
            label="Open"
            id="open"
            type="radio"
            name="open"
            value="true"
            error={errors.open}
            checked={formData.open === true}
            onChange={handleInputChange}
          />
          <RadioButton
            label="Closed"
            id="closed"
            type="radio"
            name="open"
            error={errors.open}
            value="false"
            checked={formData.open === false}
            onChange={handleInputChange}
          />
        </div>
      </div>

      <TextArea
        error={errors.remarks}
        value={formData.remarks}
        onChange={handleInputChange}
        name="remarks"
        id="remarks"
        label="remarks"
      />
      <TextArea
        error={errors.feedback}
        value={formData.feedback}
        onChange={handleInputChange}
        name="feedback"
        id="feedback"
        label="Feedback"
      />

      <Button label={isEdit ? "UPDATE" : "SUBMIT"} type="submit" />
    </form>
  );
};

export default Form;
