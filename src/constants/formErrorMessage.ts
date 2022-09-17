export enum FormErrorCode {
  REQUIRED = 'REQUIRED'
}

export const formMessageCodeMap = {
  [FormErrorCode.REQUIRED]: 'field required'
}