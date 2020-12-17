import React from "react";
import { FormattedMessage } from "react-intl";

/**
 * 
 * FormattedMessage 
 * 
 * props: MessageDescriptor &
  {
    values: object,
    tagName: string,
    children: (chunks: ReactElement) => ReactElement,
  }

  
 * ===>

 *  id?: string
    defaultMessage?: string
    description?: string,
    values?: object,
    tagName?: string,
    children?: (chunks: ReactElement) => ReactElement,
 */

function Index() {
  return (
    <>
      <h3>FormattedMessage:</h3>
      <p>
        <FormattedMessage id="simple" />
        <br />
        <FormattedMessage id="placeholder" values={{ name: "John" }} />
        <br />
        <FormattedMessage id="date" values={{ ts: Date.now() }} />
        <br />
        <FormattedMessage id="time" values={{ ts: Date.now() }} />
        <br />
        <FormattedMessage id="number" values={{ num: Math.random() * 1000 }} />
        <br />
        <FormattedMessage id="plural" values={{ num: 1 }} />
        <br />
        <FormattedMessage id="plural" values={{ num: 99 }} />
        <br />
        <FormattedMessage id="select" values={{ gender: "male" }} />
        <br />
        <FormattedMessage id="select" values={{ gender: "female" }} />
        <br />
        <FormattedMessage id="selectordinal" values={{ order: 1 }} />
        <br />
        <FormattedMessage id="selectordinal" values={{ order: 2 }} />
        <br />
        <FormattedMessage id="selectordinal" values={{ order: 3 }} />
        <br />
        <FormattedMessage id="selectordinal" values={{ order: 4 }} />
        <br />
        <FormattedMessage
          id="richtext"
          values={{ num: 99, bold: chunks => <strong>{chunks}</strong> }}
        />
        <br />
        <FormattedMessage
          id="richertext"
          values={{ num: 99, bold: chunks => <strong>{chunks}</strong> }}
        />
        <br />
        <FormattedMessage id="unicode" values={{ placeholder: "world" }} />
        <br />
      </p>
    </>
  );
}

export default Index;
