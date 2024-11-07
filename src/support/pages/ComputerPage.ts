import { Page, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import BasePage from './BasePage';
import ComputerElements from '../elements/ComputerElements';

export default class CadastroPage extends BasePage {
  readonly computerElements: ComputerElements;

  constructor(readonly page: Page) {
    super(page);
    this.page = page;
    this.computerElements = new ComputerElements(page);
  }

  async preencherFormulario(): Promise<void> {
    await this.computerElements.getBotaoAdicionarNovoComputador().click();
    await this.computerElements.getCampoNome().fill(faker.person.firstName());
    await this.computerElements.getCampoIntroduzido().fill('2022-11-05');
    await this.computerElements.getCampoDescontinuado().fill('2022-12-06');
    await this.computerElements.getCampoEmpresa().selectOption('2');
    await this.computerElements.getBotaoSubmitCriacao().click();
  }

  async preencherFormularioInvalido(): Promise<void> {
    await this.computerElements.getBotaoAdicionarNovoComputador().click();
    await this.computerElements.getCampoNome().fill(faker.person.firstName());
    await this.computerElements.getCampoIntroduzido().fill('20221105');
    await this.computerElements.getCampoDescontinuado().fill('20221206');
    await this.computerElements.getCampoEmpresa().selectOption('2');
    await this.computerElements.getBotaoSubmitCriacao().click();
  }

  async validarCadastro(): Promise<void> {
    await expect(
      this.computerElements.getMensagemCriadoSucesso()
    ).toBeVisible();
  }

  async validarCadastroInvalido(): Promise<void> {
    await expect(this.computerElements.getMensagemErroData()).toBeVisible();
  }
}
