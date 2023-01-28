import { Select } from "antd";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dataTypes } from "../utills/formString";
import { Input, Tag, Tooltip } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { createNewField } from "../store/formDataSlice";

const strc = {
  id: 1,
  data: {
    questionDetail: [
      {
        id: 1,
        question: "",
        type: "checkbox",
        values: [],
        required: true,
      },
    ],
    title: "",
    description: "",
  },
};
const CreateNewForm = ({ id }) => {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.customformList[1]);
  const [data, setData] = useState({
    questionDetail: [
      {
        id: 1,
        question: "",
        type: "checkbox",
        values: [],
        required: true,
      },
    ],
    title: "",
    description: "",
  });
  const [tags, setTags] = useState([""]);
  const [inputVisible, setInputVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [editInputIndex, setEditInputIndex] = useState(-1);
  const [editInputValue, setEditInputValue] = useState("");
  const inputRef = useRef(null);
  const editInputRef = useRef(null);
  // input handlers and side effect
  console.log("nj local data", data);

  // initialzing field
  useEffect(() => {
    dispatch(createNewField(strc));
  }, []);

  useEffect(() => {
    if (inputVisible) {
      inputRef.current?.focus();
    }
  }, [inputVisible]);
  useEffect(() => {
    editInputRef.current?.focus();
  }, [inputValue]);
  const handleClose = (removedTag) => {
    const newTags = tags.filter((tag) => tag !== removedTag);
    console.log(newTags);
    setTags(newTags);
  };
  const showInput = () => {
    setInputVisible(true);
  };
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleInputConfirm = () => {
    if (inputValue && tags.indexOf(inputValue) === -1) {
      setTags([...tags, inputValue]);
      handleLocalInputs(tags, "value", id);
    }
    setInputVisible(false);
    setInputValue("");
  };
  const handleEditInputChange = (e) => {
    setEditInputValue(e.target.value);
  };
  const handleEditInputConfirm = () => {
    const newTags = [...tags];
    newTags[editInputIndex] = editInputValue;
    setTags(newTags);
    setEditInputIndex(-1);
    setInputValue("");
  };
  const tagInputStyle = {
    width: 78,
    verticalAlign: "top",
  };
  const tagPlusStyle = {
    background: "white",
    borderStyle: "dashed",
  };

  const handleLocalInputs = (value, name, id) => {
    let temp = { ...data };
    temp.questionDetail.map((t) => {
      if (t.id === id) {
        t[name] = value;
      }
    });
    setData(temp);
  };
  const getFieldForSelectOptions = (id) => {
    return (
      <>
        {tags.map((tag, index) => {
          if (editInputIndex === index) {
            return (
              <Input
                ref={editInputRef}
                key={tag}
                size="small"
                disabled={tags.length > 10}
                style={tagInputStyle}
                value={editInputValue}
                onChange={handleEditInputChange}
                onBlur={handleEditInputConfirm}
                onPressEnter={handleEditInputConfirm}
              />
            );
          }
          const isLongTag = tag.length > 20;
          const tagElem = (
            <Tag
              key={tag}
              closable={index !== 0}
              style={{
                userSelect: "none",
              }}
              onClose={() => handleClose(tag)}
            >
              <span
                onDoubleClick={(e) => {
                  if (index !== 0) {
                    setEditInputIndex(index);
                    setEditInputValue(tag);
                    e.preventDefault();
                  }
                }}
              >
                {isLongTag ? `${tag.slice(0, 20)}...` : tag}
              </span>
            </Tag>
          );
          return isLongTag ? (
            <Tooltip title={tag} key={tag}>
              {tagElem}
            </Tooltip>
          ) : (
            tagElem
          );
        })}
        {inputVisible ? (
          <Input
            ref={inputRef}
            type="text"
            size="small"
            style={tagInputStyle}
            value={inputValue}
            onChange={handleInputChange}
            onBlur={handleInputConfirm}
            onPressEnter={handleInputConfirm}
          />
        ) : (
          <Tag style={tagPlusStyle} onClick={showInput}>
            <PlusOutlined /> enter option here
          </Tag>
        )}
      </>
    );
  };
  const getInputField = (type, id) => {
    switch (type) {
      case "radio": {
        return getFieldForSelectOptions(id);
      }
      case "text": {
        return (
          <input
            type="text"
            class="form-control"
            placeholder="type options here"
          />
        );
      }
      case "number": {
        return (
          <input
            type="number"
            class="form-control"
            placeholder="type options here"
          />
        );
      }
      default: {
        return getFieldForSelectOptions(id);
      }
    }
  };

  const addField = () => {
    let temp = { ...data };
    let newId =
      strc.data.questionDetail[strc.data.questionDetail.length - 1].id + 1;
    temp.questionDetail.push({ ...strc.data.questionDetail[0], id: newId });

    setData(temp);
  };

  //  returning jsx
  return (
    <div class="m-5 p-5">
      <div class="card text-center w-90">
        <div class="card-header">Create New Form</div>
        <div class="card-body">
          {/* <h5 class="card-title">Special title treatment</h5> */}
          <div class="input-group input-group-sm mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="inputGroup-sizing-sm">
                Title
              </span>
            </div>
            <input
              type="text"
              value={data?.title}
              onChange={(e) => setData({ ...data, title: e.target.value })}
              class="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-sm"
            />
          </div>
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text">Description</span>
            </div>
            <textarea
              value={data?.description}
              onChange={(e) =>
                setData({ ...data, description: e.target.value })
              }
              class="form-control"
              aria-label="Description"
            />
          </div>

          {/* custom field creation box  */}
          <div className="custom-input-container">
            {data &&
              data?.questionDetail?.length &&
              data?.questionDetail?.map((e, i) => {
                return (
                  <div class="row">
                    <div class="col-8">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter Question here"
                        value={e?.question}
                        name="question"
                        onChange={(e1) =>
                          handleLocalInputs(
                            e1.target.value,
                            e1.target.name,
                            e.id
                          )
                        }
                      />
                    </div>
                    <div class="col-4">
                      <Select
                        defaultValue="checkbox"
                        style={{ width: 200 }}
                        // onChange={handleChange}
                        options={dataTypes}
                        value={e?.type}
                        name="description"
                        onChange={(e1) => handleLocalInputs(e1, "type", id)}
                      />
                    </div>
                    <div class="col-8 mt-3 p-4 bg-light ">
                      {getInputField(e?.type, e.id)}
                    </div>
                    <div class="col-8 mt-3"></div>
                  </div>
                );
              })}
          </div>
        </div>

        {/* footer contain buttons */}
        <div class="card-footer text-muted d-flex justify-content-between">
          <button onClick={addField} class="btn btn-primary">
            Add
          </button>
          <button
            onClick={() => dispatch(createNewField(data))}
            class="btn btn-primary"
          >
            Submit
          </button>
        </div>
      </div>
      {/* <button onClick={() => dispatch(incremented())}>click me</button>
      <p>{value}</p> */}
    </div>
  );
};

export default CreateNewForm;
