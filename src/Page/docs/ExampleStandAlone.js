import React from 'react';

import Add from 'wix-ui-icons-common/Add';
import s from './ExampleStandAlone.scss';
import { LongTextContent } from './SomeContentComponent';

import { Page, Button, Card, Container, Row, Col } from 'wix-style-react';

const ExampleStandAlone = () => (
  <div className={s.fullHeightStoryContainer}>
    <Page>
      <Page.Header
        title="Your Product"
        showBackButton
        onBackClicked={() => {}}
        actionsBar={<Button prefixIcon={<Add />}>New Item</Button>}
      />

      <Page.Content>
        <Container>
          <Row>
            <Col>
              <Card>
                <Card.Header title="Catchy Header" />
                <Card.Divider />
                <Card.Content>
                  <LongTextContent />
                </Card.Content>
              </Card>
            </Col>
          </Row>
        </Container>
      </Page.Content>
    </Page>
  </div>
);

export default ExampleStandAlone;
