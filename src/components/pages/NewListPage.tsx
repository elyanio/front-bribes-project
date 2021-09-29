import React from "react";
import { Col, Container, FormLabel, Row } from "react-bootstrap";
import { String } from "../../utils/string";
import useBreakpoint, { isTableOrMobile } from "../../utils/useBreakpoint";
import PrimaryButton from "../buttons/PrimaryButton";
import PrimaryInput from "../inputs/PrimaryInput";
import List from "../List";
import LoadingWrapper from "../LoadingWrapper";

interface Props {
  onNChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onCreateList: () => void;
  list: number[];
  onListChange: (list: number[]) => void;
  loadingBribesCount?: boolean;
  bribesCount: number | string;
  onSaveBribesList: () => void;
  loadingSaveBribes?: boolean;
  n: string;
}

//TODO: please add formik to improve this code
function NewListPage({
  onNChange,
  onCreateList,
  list,
  onListChange,
  loadingBribesCount,
  bribesCount,
  onSaveBribesList,
  loadingSaveBribes,
  n,
}: Props) {
  const bp = useBreakpoint();
  const renderItem = (item: number) => (
    <div className="d-flex justify-content-between align-items-center">
      <span>{item}</span>
    </div>
  );
  const getKey = (item: number) => item;
  const colXS = isTableOrMobile(bp || "") ? 12 : 6;
  const direction = isTableOrMobile(bp || "") ? "flex-column" : "";
  return (
    <Container className="pt-2 pl-5 pr-5" fluid>
      <Row className="pb-4 d-flex justify-content-end align-items-center">
        <div className="pr-4">
          <LoadingWrapper loading={loadingBribesCount}>
            <FormLabel hidden={!list.length} className="mb-0">
              {`${String.BRIBES_COUNT} ${bribesCount}`}
            </FormLabel>
          </LoadingWrapper>
        </div>
        <PrimaryButton
          hidden={!list.length}
          loading={loadingSaveBribes}
          onClick={onSaveBribesList}
          data-testid="n-button"
          variant="primary"
        >
          {String.SAVE_LIST}
        </PrimaryButton>
      </Row>
      <Row className={`d-flex ${direction}`}>
        <Col xs={colXS}>
          <Row className="w-100">
            <PrimaryInput
              type="number"
              fieldName={String.N_ITEMS_IN_THE_LIST}
              data-testid="n-input"
              controlProps={{ onChange: onNChange, value: n }}
            />
          </Row>
          <Row>
            <PrimaryButton
              onClick={onCreateList}
              data-testid="n-button"
              variant="primary"
            >
              {String.GENERATE_INITIAL_LIST}
            </PrimaryButton>
          </Row>
        </Col>
        <hr />
        <Col hidden={!list.length} xs={colXS}>
          <Row>
            <FormLabel className="w-100">
              {String.DRAW_AND_DROP_TO_CHANGE_ORDER_LIST}
            </FormLabel>
            <List
              items={list}
              onDragEnd={onListChange}
              renderItem={renderItem}
              getKey={getKey}
            />
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default NewListPage;
