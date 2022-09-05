import React from 'react';
import Nav from '../shared/Nav';
import Footer from '../shared/Footer';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import Job from './Job';
import * as styles from './styles.js'
import { JobsContainer } from './styles.js';
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
      <JobsContainer hasJobs={jobsData?.length > 0}>
        {jobsData?.length > 0 && (
          <div css={styles.headerClass}>
            <div css={styles.textClass}>We're <br />hiring!</div>
            <div css={styles.descriptionClass}>Join our fully remote team, yadda yadda something or other</div>
          </div>
        )}
        {jobsData?.length < 1 && (
          <div css={styles.jobTitleClass}>We just hired a few new team members, but check back later to join our growing team!</div>
        )}
        {jobsData?.length > 0 && (
          <div css={styles.jobsContainerClass}>
            {jobsData}
          </div>
        )}
      </JobsContainer>
      <Footer />
    </>
  )
}

export default Jobs;
