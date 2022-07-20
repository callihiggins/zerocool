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
          <div css={sharedstyles.titleBannerClass}>We're hiring!</div>
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
