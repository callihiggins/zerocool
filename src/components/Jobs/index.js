import React from 'react';
import Nav from '../shared/Nav';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import Job from './Job';
import * as styles from './styles.js'
import * as sharedstyles from '../shared/styles.js';

const JOBS_DATA = gql`
{
  jobPostingCollection(order: [sys_firstPublishedAt_ASC]) {
		items {
			title
			description {
				json
			}
		}
	}
}`

const Jobs = () => {
  const { data } = useQuery(JOBS_DATA);
	const jobsData = data?.jobPostingCollection?.items.map(
    data => <Job data={data}/>
  )
  return (
    <>
      <Nav active="jobs"></Nav>
      <div css={styles.jobsSectionContainerClass}>
        <div css={sharedstyles.titleBannerClass}>We're Hiring</div>
        <div css={styles.jobsContainerClass}>
          {jobsData}
        </div>
      </div>
    </>
  )
}

export default Jobs;
