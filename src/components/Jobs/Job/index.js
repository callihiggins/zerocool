import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import * as styles from './styles';
import theme from '../../../theme';

const Job = ({ data, reference }) => {
  const { title, description } = data;
  return (
    <div css={styles.jobContainerClass} id={reference}>
      <div css={styles.titleClass}>
        <div>{title}</div>
      </div>
      <div css={styles.descriptionClass}>
        {documentToReactComponents(description.json)}
      </div>
    </div>
  )
}

export default Job;