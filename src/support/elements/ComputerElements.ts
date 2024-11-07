import { Locator, Page } from '@playwright/test';
import BaseElements from './BaseElements';

export default class ComputerElements extends BaseElements {
  constructor(readonly page: Page) {
    super(page);
    this.page = page;
  }

  getBotaoAdicionarNovoComputador(): Locator {
    return this.page.locator('#add');
  }

  getCampoPesquisa(): Locator {
    return this.page.locator('#searchbox');
  }

  getBotaoPesquisa(): Locator {
    return this.page.locator('#searchsubmit');
  }

  getCampoNome(): Locator {
    return this.page.locator('#name');
  }

  getCampoIntroduzido(): Locator {
    return this.page.locator('#introduced');
  }

  getCampoDescontinuado(): Locator {
    return this.page.locator('#discontinued');
  }

  getCampoEmpresa(): Locator {
    return this.page.locator('#company');
  }

  getBotaoSubmitCriacao(): Locator {
    return this.page.locator('input[type="submit"]');
  }

  getMensagemCriadoSucesso(): Locator {
    return this.page.locator('div[class="alert-message warning"]');
  }

  getMensagemErroData(): Locator {
    return this.page
      .locator('text=Failed to decode date : java.time.format.DateTime')
      .first();
  }
}
