import { test } from '@playwright/test';
import { join } from 'path';
import { TheConfig } from 'sicolo';
import ComputerPage from '../support/pages/ComputerPage';

test.describe('Cadastro de computador descontinuado', () => {
  const CONFIG = join(__dirname, '../support/fixtures/config.yml');
  let computerPage: ComputerPage;
  const BASE_URL = TheConfig.fromFile(CONFIG)
    .andPath('application.computer_database')
    .retrieveData();

  test.beforeEach(async ({ page }) => {
    computerPage = new ComputerPage(page);
    await page.goto(BASE_URL);
  });

  test('Preencher formulário de cadastro válido', async () => {
    await computerPage.preencherFormulario();
    await computerPage.validarCadastro();
  });

  test('Preencher formulário de cadastro com campo data digitado errado', async () => {
    await computerPage.preencherFormularioInvalido();
    await computerPage.validarCadastroInvalido();
  });
});
