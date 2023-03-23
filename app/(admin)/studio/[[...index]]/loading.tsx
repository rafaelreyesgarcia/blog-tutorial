'use client'

import config from '../../../../sanity.config'
import {NextStudioLoading as Loading} from 'next-sanity/studio/loading'

export default function NextStudioLoading() {
  return <Loading config={config} />
}