import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useCallback, useState } from "react";
import { Col, Container, FormLabel, Row } from "react-bootstrap";
import { String } from "../../utils/string";
import useBreakpoint, { isTableOrMobile } from "../../utils/useBreakpoint";
import PrimaryButton from "../buttons/PrimaryButton";
import List from "../List";
import LoadingWrapper from "../LoadingWrapper";

interface Props {
  list: Definitions.List[];
  onListChange: (list: Definitions.List[]) => void;
  loadingAllBribes?: boolean;
  onDelete: (
    id?: number
  ) => (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  loadingDelete?: boolean;
  onItemClick: (
    id?: number | undefined
  ) => (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

function MainPage({
  list,
  onListChange,
  loadingAllBribes,
  onDelete,
  loadingDelete,
  onItemClick,
}: Props) {
  const bp = useBreakpoint();
  const [idToDelete, setIdToDelete] = useState<number | undefined>();
  const onDeleteCallback = useCallback(
    (id?: number) => (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      setIdToDelete(id);
      onDelete(id)(e);
    },
    [onDelete]
  );

  const renderItem = (item: Definitions.List) => (
    <div
      onClick={onItemClick(item.id)}
      className="d-flex justify-content-between align-items-center"
    >
      <span className="mr-5">{item.q}</span>
      <div className="d-flex align-items-center">
        <span className="mr-1 text-right">{item.result}</span>
        <LoadingWrapper loading={loadingDelete && item.id === idToDelete}>
          <PrimaryButton
            style={{
              backgroundColor: "transparent",
              border: "none",
              height: 35,
              padding: 2,
            }}
            onClick={onDeleteCallback(item.id)}
          >
            <FontAwesomeIcon
              className="nav-icon m-2 fas"
              icon={faTrash}
              title={String.DELETE}
            />
          </PrimaryButton>
        </LoadingWrapper>
      </div>
    </div>
  );
  const getKey = (item: Definitions.List) => item.id || item.q;
  const colXS = isTableOrMobile(bp || "") ? 12 : 6;
  const direction = isTableOrMobile(bp || "") ? "flex-column" : "";
  return (
    <Container className={`pt-2 pl-5 pr-5 d-flex ${direction}`} fluid>
      <Col xs={colXS} className="pt-2 pr-2">
        <Row style={{ maxWidth: 400 }}>
          <FormLabel className="w-100">{String.All_SAVED_LIST}</FormLabel>
          {!!list.length && (
            <LoadingWrapper loading={loadingAllBribes}>
              <List
                items={list}
                renderItem={renderItem}
                getKey={getKey}
                onDragEnd={onListChange}
              />
            </LoadingWrapper>
          )}
        </Row>
      </Col>
      <hr />
      <Col xs={colXS} className="pt-2 pl-2 d-flex">
        <Row className="pl-2">
          <span>Details banner</span>
        </Row>
      </Col>
    </Container>
  );
}

export default MainPage;
