// ts-ignore
declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    FChooseIcon: typeof import('../index')['ChooseIcon']
    FLayout: typeof import('../index')['Layout']
    FLogin: typeof import('../index')['Login']
    FTableFeatureBar: typeof import('../index')['TableFeatureBar']
    FActionBar: typeof import('../index')['ActionBar']
    FSearchForm: typeof import('../index')['SearchForm']
    FIconFont: typeof import('../index')['IconFont']
    FForm: typeof import('../index')['Form']
    FModalForm: typeof import('../index')['ModalForm']
  }
}

export {}
