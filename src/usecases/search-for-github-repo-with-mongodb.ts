import { Logger } from '../adapters/logger';
import nodeFetch from 'node-fetch'

interface ArgsI {
  logger: typeof Logger;
}

interface Params {
  searchString?: string
  sortOrder?: string
  pageSize?: number
  sortBy?: string
  page?: number
}

export class SearchGithubRepoWithMongodb {
  private logger: typeof Logger;

  constructor({  logger }: ArgsI) {
    this.logger = logger;
  }

  async execute(params: Params): Promise<any> {
    const baseUrl = 'https://api.github.com/search/repositories'
    const queryString = this.buildQueryParam(params)
    try {
      const response = await nodeFetch(`${baseUrl}?${queryString}`)
      const data = await response.json()
      return data
    } catch (ex) {
      this.logger.error(ex);
      throw ex
    }
  }

  private buildQueryParam(params: Params): string {
    const { searchString, sortBy, sortOrder, page, pageSize } = params
    const queryParams = []

    if(searchString) {
      queryParams.push(
        `q=${encodeURIComponent(`${searchString} mongodb in:file`)}`
      )
    }else {
      queryParams.push(
        `q=${encodeURIComponent('mongodb in:file')}`
      )
    }

    if(pageSize) {
      queryParams.push(`per_page=${pageSize}`)
    }

    if(page) {
      queryParams.push(`page=${pageSize}`)
    }

    if(sortBy) {
      queryParams.push(`sort=${sortBy}`)
    }

    if(sortOrder) {
      queryParams.push(`order=${sortOrder}`)
    }

    return queryParams.join('&')
  }
}
