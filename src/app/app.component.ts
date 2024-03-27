import { Component, OnInit } from '@angular/core';
import tinymce from 'tinymce';
// @ts-ignore
import * as htmlToPdfmake from 'html-to-pdfmake';
const pdfMakeX = require('pdfmake/build/pdfmake.js');
// import * as pdfFonts from 'pdfmake/build/vfs_fonts';
const pdfFontsX = require('pdfmake/build/vfs_fonts');
pdfMakeX.vfs = pdfFontsX.pdfMake.vfs;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'tinymce-angular-demo';
  currentAuthor = 'A Tiny User';
  userAllowedToResolve = 'Admin1';

  data: string = `
  <p class="paragraph" style="text-align: right; margin: 0cm; vertical-align: baseline;" align="right"><span
    style="font-size: 10pt;"><u><span style="color: rgb(87, 86, 86); border: none;">Asunto: S</span></u><span
      class="normaltextrun"><u><span style="color: rgb(87, 86, 86); border: 1pt none windowtext; padding: 0cm;">e
          otorga</span></u></span><span class="normaltextrun"><u><span
          style="color: rgb(87, 86, 86); border: 1pt none windowtext; padding: 0cm;"> </span></u></span><span
      class="normaltextrun"><u><span
          style="color: rgb(87, 86, 86); border: 1pt none windowtext; padding: 0cm;">ampliaci</span></u></span><span
      class="normaltextrun"><u><span
          style="color: rgb(87, 86, 86); border: 1pt none windowtext; padding: 0cm;">&oacute;</span></u></span><span
      class="normaltextrun"><u><span
          style="color: rgb(87, 86, 86); border: 1pt none windowtext; padding: 0cm;">n</span></u></span><span
      class="normaltextrun"><u><span style="color: rgb(87, 86, 86); border: 1pt none windowtext; padding: 0cm;">
        </span></u></span><span class="normaltextrun"><u><span
          style="color: rgb(87, 86, 86); border: 1pt none windowtext; padding: 0cm;">al</span></u></span><span
      class="normaltextrun"><u><span style="color: rgb(87, 86, 86); border: 1pt none windowtext; padding: 0cm;">
        </span></u></span><span class="normaltextrun"><u><span
          style="color: rgb(87, 86, 86); border: 1pt none windowtext; padding: 0cm;">plazo</span></u></span><span
      class="normaltextrun"><u><span style="color: rgb(87, 86, 86); border: 1pt none windowtext; padding: 0cm;">
        </span></u></span><span class="normaltextrun"><u><span
          style="color: rgb(87, 86, 86); border: 1pt none windowtext; padding: 0cm;">establecido</span></u></span><span
      class="normaltextrun"><u><span style="color: rgb(87, 86, 86); border: 1pt none windowtext; padding: 0cm;">
        </span></u></span><span class="normaltextrun"><u><span
          style="color: rgb(87, 86, 86); border: 1pt none windowtext; padding: 0cm;">en</span></u></span><span
      class="normaltextrun"><u><span style="color: rgb(87, 86, 86); border: 1pt none windowtext; padding: 0cm;">
        </span></u></span><span class="normaltextrun"><u><span
          style="color: rgb(87, 86, 86); border: 1pt none windowtext; padding: 0cm;">el oficio de
          prevenci</span></u></span><span class="normaltextrun"><u><span
          style="color: rgb(87, 86, 86); border: 1pt none windowtext; padding: 0cm;">&oacute;</span></u></span><span
      class="normaltextrun"><u><span
          style="color: rgb(87, 86, 86); border: 1pt none windowtext; padding: 0cm;">n</span></u></span><span
      class="normaltextrun"><u><span style="color: rgb(87, 86, 86); border: 1pt none windowtext; padding: 0cm;">
        </span></u></span><span class="normaltextrun"><u><span
          style="color: rgb(87, 86, 86); border: 1pt none windowtext; padding: 0cm;">relativo al</span></u></span><span
      class="normaltextrun"><u><span style="color: rgb(87, 86, 86); border: 1pt none windowtext; padding: 0cm;">
        </span></u></span><span class="normaltextrun"><u><span
          style="color: rgb(87, 86, 86); border: 1pt none windowtext; padding: 0cm;">tr</span></u></span><span
      class="normaltextrun"><u><span
          style="color: rgb(87, 86, 86); border: 1pt none windowtext; padding: 0cm;">&aacute;</span></u></span><span
      class="normaltextrun"><u><span style="color: rgb(87, 86, 86); border: 1pt none windowtext; padding: 0cm;">mite
          de</span></u></span><span class="normaltextrun"><u><span
          style="color: rgb(87, 86, 86); border: 1pt none windowtext; padding: 0cm;"> </span></u></span><span
      class="normaltextrun"><u><span
          style="color: rgb(87, 86, 86); border: 1pt none windowtext; padding: 0cm;">solicitud</span></u></span><span
      class="normaltextrun"><u><span style="color: rgb(87, 86, 86); border: 1pt none windowtext; padding: 0cm;">
        </span></u></span><span class="normaltextrun"><u><span
          style="color: rgb(87, 86, 86); border: 1pt none windowtext; padding: 0cm;">de</span></u></span><span
      class="normaltextrun"><u><span style="color: rgb(87, 86, 86); border: 1pt none windowtext; padding: 0cm;">
        </span></u></span><span class="normaltextrun"><u><span
          style="color: rgb(87, 86, 86); border: 1pt none windowtext; padding: 0cm;">Registro</span></u></span><span
      class="normaltextrun"><u><span style="color: rgb(87, 86, 86); border: 1pt none windowtext; padding: 0cm;">
        </span></u></span><span class="normaltextrun"><u><span
          style="color: rgb(87, 86, 86); border: 1pt none windowtext; padding: 0cm;">del Sistema de
          Administraci</span></u></span><span class="normaltextrun"><u><span
          style="color: rgb(87, 86, 86); border: 1pt none windowtext; padding: 0cm;">&oacute;</span></u></span><span
      class="normaltextrun"><u><span
          style="color: rgb(87, 86, 86); border: 1pt none windowtext; padding: 0cm;">n</span></u></span><span
      class="normaltextrun"><u><span style="color: rgb(87, 86, 86); border: 1pt none windowtext; padding: 0cm;">
        </span></u></span><span class="normaltextrun"><u><span
          style="color: rgb(87, 86, 86); border: 1pt none windowtext; padding: 0cm;">del Regulado</span></u></span><span
      class="normaltextrun"><u><span style="color: rgb(87, 86, 86); border: 1pt none windowtext; padding: 0cm;">
        </span></u></span><span class="normaltextrun"><u><span
          style="color: rgb(87, 86, 86); border: 1pt none windowtext; padding: 0cm;">y, en su
          caso,</span></u></span><span class="normaltextrun"><u><span
          style="color: rgb(87, 86, 86); border: 1pt none windowtext; padding: 0cm;"> </span></u></span><span
      class="normaltextrun"><u><span
          style="color: rgb(87, 86, 86); border: 1pt none windowtext; padding: 0cm;">asignaci</span></u></span><span
      class="normaltextrun"><u><span
          style="color: rgb(87, 86, 86); border: 1pt none windowtext; padding: 0cm;">&oacute;</span></u></span><span
      class="normaltextrun"><u><span style="color: rgb(87, 86, 86); border: 1pt none windowtext; padding: 0cm;">n de la
          CURR</span></u></span><span class="normaltextrun"><span
        style="color: rgb(87, 86, 86); border: 1pt none windowtext; padding: 0cm;">.</span></span></span></p>
<p class="paragraph" style="text-align: right; margin: 0cm; vertical-align: baseline;" align="right"><span
    style="font-size: 10pt;"><span class="eop"><span style="color: rgb(87, 86, 86);">&nbsp;</span></span></span></p>
<table style="border-collapse: collapse; width: 100%;" border="1">
  <colgroup>
    <col style="width: 33.3076%;">
    <col style="width: 33.3076%;">
    <col style="width: 33.3076%;">
  </colgroup>
  <tbody>
    <tr>
      <td><strong>Encabezado</strong></td>
      <td><span class="mce-annotation tox-comment" data-mce-annotation-uid="mce-conversation_49740005021711494879836"
          data-mce-annotation="tinycomments"><strong>Encabezado</strong></span></td>
      <td><strong>Encabezado</strong></td>
    </tr>
    <tr>
      <td><span style="font-size: 10pt;"><span style="line-height: 115%; color: rgb(87, 86, 86);">turnado para su
            atenci&oacute;n a la <strong>Direcci&oacute;n General de Gesti&oacute;n de Procesos Industriales</strong>,
            por medio del cual, el <strong>C.</strong> </span><strong><span
              style="line-height: 115%; color: rgb(87, 86, 86); background: yellow;">Nombre del Representante/Apoderado
              legal</span></strong><span style="line-height: 115%; color: rgb(87, 86, 86);">, en su car&aacute;cter de
            <span style="background: yellow;">representante/apoderado</span> legal de la empresa</span></span></td>
      <td><span style="font-size: 10pt;"><span style="line-height: 115%; color: rgb(87, 86, 86);">turnado para su
            atenci&oacute;n a la <strong>Direcci&oacute;n General de Gesti&oacute;n de Procesos Industriales</strong>,
            por medio del cual, el <strong>C.</strong> </span><strong><span
              style="line-height: 115%; color: rgb(87, 86, 86); background: yellow;">Nombre del Representante/Apoderado
              legal</span></strong><span style="line-height: 115%; color: rgb(87, 86, 86);">, en su car&aacute;cter de
            <span style="background: yellow;">representante/apoderado</span> legal de la empresa</span></span></td>
      <td><span style="font-size: 10pt;"><span style="line-height: 115%; color: rgb(87, 86, 86);">turnado para su
            atenci&oacute;n a la <strong>Direcci&oacute;n General de Gesti&oacute;n de Procesos Industriales</strong>,
            por medio del cual, el <strong>C.</strong> </span><strong><span
              style="line-height: 115%; color: rgb(87, 86, 86); background: yellow;">Nombre del Representante/Apoderado
              legal</span></strong><span style="line-height: 115%; color: rgb(87, 86, 86);">, en su car&aacute;cter de
            <span style="background: yellow;">representante/apoderado</span> legal de la empresa</span></span></td>
    </tr>
  </tbody>
</table>
<p style="text-align: justify; margin-bottom: 0cm; line-height: 150%; border: none;">&nbsp;</p>
<p class="MsoFooter" style="text-align: justify; line-height: 115%;"><span style="font-size: 10pt;"><span
      style="line-height: 115%; color: rgb(87, 86, 86);">Con referencia a su escrito </span><span
      style="line-height: 115%; color: rgb(87, 86, 86); background: yellow;">n&uacute;mero del escrito</span><span
      style="line-height: 115%; color: rgb(87, 86, 86);"> de fecha <span
        style="background: yellow; mso-highlight: yellow;">fecha del escrito</span>, <span
        style="background: yellow; mso-highlight: yellow;">y sus anexos</span>,</span><span
      style="line-height: 115%; color: rgb(87, 86, 86);"> ingresados el <span
        style="background: yellow; mso-highlight: yellow;">fecha de ingreso</span> en el &Aacute;rea de Atenci&oacute;n
      al Regulado (<strong>AAR</strong>) de esta Agencia Nacional de Seguridad Industrial y de Protecci&oacute;n al
      Medio Ambiente del Sector Hidrocarburos (<strong>AGENCIA</strong>), y turnado para su atenci&oacute;n a la
      <strong>Direcci&oacute;n General de Gesti&oacute;n de Procesos Industriales</strong>, por medio del cual, el
      <strong>C.</strong> </span><strong><span
        style="line-height: 115%; color: rgb(87, 86, 86); background: yellow;">Nombre del Representante/Apoderado
        legal</span></strong><span style="line-height: 115%; color: rgb(87, 86, 86);">, en su car&aacute;cter de <span
        style="background: yellow; mso-highlight: yellow;">representante/apoderado</span> legal de la empresa
    </span><strong><span style="line-height: 115%; color: rgb(87, 86, 86); background: yellow;">Nombre de la
        Raz&oacute;n Social</span></strong><span style="line-height: 115%; color: rgb(87, 86, 86);">,</span><span
      style="line-height: 115%; color: rgb(87, 86, 86);"> (<strong>EMPRESA</strong>), solicit&oacute; ampliaci&oacute;n
      al plazo establecido para el desahogo de la &nbsp;prevenci&oacute;n realizada con oficio n&uacute;mero
      <strong><span
          style="background: yellow; mso-highlight: yellow;">&nbsp;ASEA/UGI/DGGXX/XXXX/202X</span></strong><span
        style="background: yellow; mso-highlight: yellow;"> </span>de fecha <span
        style="background: yellow; mso-highlight: yellow;">fecha del oficio</span>; </span><span
      class="normaltextrun"><span style="line-height: 115%; color: rgb(80, 80, 80);">mediante </span></span><span
      class="normaltextrun"><span style="line-height: 115%; color: rgb(80, 80, 80);">&nbsp;</span></span><span
      class="normaltextrun"><span style="line-height: 115%; color: rgb(80, 80, 80);">el cual,</span></span><span
      class="normaltextrun"><span style="line-height: 115%; color: rgb(80, 80, 80);">&nbsp;</span></span><span
      class="normaltextrun"><span style="line-height: 115%; color: rgb(80, 80, 80);">la</span></span><span
      class="normaltextrun"><span style="line-height: 115%; color: rgb(80, 80, 80);">&nbsp;</span></span><span
      class="normaltextrun"><strong><span
          style="line-height: 115%; color: rgb(80, 80, 80);">AGENCIA</span></strong></span><span
      class="normaltextrun"><span style="line-height: 115%; color: rgb(80, 80, 80);">&nbsp;</span></span><span
      class="normaltextrun"><span style="line-height: 115%; color: rgb(80, 80, 80);">otorg&oacute; un plazo para que
        presentara</span></span><span class="normaltextrun"><span
        style="line-height: 115%; color: rgb(80, 80, 80);">&nbsp;</span></span><span class="normaltextrun"><span
        style="line-height: 115%; color: rgb(80, 80, 80);">documentos e</span></span><span class="normaltextrun"><span
        style="line-height: 115%; color: rgb(80, 80, 80);">&nbsp;</span></span><span class="normaltextrun"><span
        style="line-height: 115%; color: rgb(80, 80, 80);">informaci&oacute;n</span></span><span
      class="normaltextrun"><span style="line-height: 115%; color: rgb(80, 80, 80);">&nbsp;</span></span><span
      class="normaltextrun"><span style="line-height: 115%; color: rgb(80, 80, 80);">faltante</span></span><span
      class="normaltextrun"><span style="line-height: 115%; color: rgb(80, 80, 80);">&nbsp;</span></span><span
      class="normaltextrun"><span style="line-height: 115%; color: rgb(80, 80, 80);">para</span></span><span
      class="normaltextrun"><span style="line-height: 115%; color: rgb(80, 80, 80);">&nbsp;</span></span><span
      class="normaltextrun"><span style="line-height: 115%; color: rgb(80, 80, 80);">efectos de</span></span><span
      class="normaltextrun"><span style="line-height: 115%; color: rgb(80, 80, 80);">&nbsp;</span></span><span
      class="normaltextrun"><span style="line-height: 115%; color: rgb(80, 80, 80);">resolver</span></span><span
      class="normaltextrun"><span style="line-height: 115%; color: rgb(80, 80, 80);">&nbsp;</span></span><span
      class="normaltextrun"><span style="line-height: 115%; color: rgb(80, 80, 80);">el tr&aacute;mite
        de</span></span><span class="normaltextrun"><span
        style="line-height: 115%; color: rgb(80, 80, 80);">&nbsp;</span></span><span class="normaltextrun"><span
        style="line-height: 115%; color: rgb(80, 80, 80);">solicitud de</span></span><span class="normaltextrun"><span
        style="line-height: 115%; color: rgb(80, 80, 80);">&nbsp;</span></span><span class="normaltextrun"><span
        style="line-height: 115%; color: rgb(80, 80, 80);">Registro del</span></span><span class="normaltextrun"><span
        style="line-height: 115%; color: rgb(80, 80, 80);">&nbsp;</span></span><span class="normaltextrun"><span
        style="line-height: 115%; color: rgb(80, 80, 80);">Sistema de Administraci</span></span><span
      class="normaltextrun"><span style="line-height: 115%; color: rgb(80, 80, 80);">&oacute;</span></span><span
      class="normaltextrun"><span style="line-height: 115%; color: rgb(80, 80, 80);">n</span></span><span
      class="normaltextrun"><span style="line-height: 115%; color: rgb(80, 80, 80);">&nbsp;</span></span><span
      class="normaltextrun"><span style="line-height: 115%; color: rgb(80, 80, 80);">del Regulado</span></span><span
      class="normaltextrun"><span style="line-height: 115%; color: rgb(80, 80, 80);">&nbsp;</span></span><span
      class="normaltextrun"><span style="line-height: 115%; color: rgb(80, 80, 80);">y, en su caso,</span></span><span
      class="normaltextrun"><span style="line-height: 115%; color: rgb(80, 80, 80);">&nbsp;</span></span><span
      class="normaltextrun"><span style="line-height: 115%; color: rgb(80, 80, 80);">expedici&oacute;n de la Constancia
        de Conformaci&oacute;n del Sistema</span></span><span class="normaltextrun"><span
        style="line-height: 115%; color: rgb(80, 80, 80);">&nbsp;</span></span><span class="normaltextrun"><span
        style="line-height: 115%; color: rgb(80, 80, 80);">y</span></span><span class="normaltextrun"><span
        style="line-height: 115%; color: rgb(80, 80, 80);">&nbsp;</span></span><span class="normaltextrun"><span
        style="line-height: 115%; color: rgb(80, 80, 80);">asignaci</span></span><span class="normaltextrun"><span
        style="line-height: 115%; color: rgb(80, 80, 80);">&oacute;</span></span><span class="normaltextrun"><span
        style="line-height: 115%; color: rgb(80, 80, 80);">n de la</span></span><span class="normaltextrun"><span
        style="line-height: 115%; color: rgb(80, 80, 80);">&nbsp;</span></span><span class="normaltextrun"><span
        style="line-height: 115%; color: rgb(80, 80, 80);">Clave </span></span><span class="normaltextrun"><span
        style="line-height: 115%; color: rgb(80, 80, 80);">&Uacute;</span></span><span class="normaltextrun"><span
        style="line-height: 115%; color: rgb(80, 80, 80);">nica de Registro del Regulado</span></span><span
      class="normaltextrun"><span style="line-height: 115%; color: rgb(80, 80, 80);">&nbsp;</span></span><span
      class="normaltextrun"><span
        style="line-height: 115%; color: rgb(80, 80, 80);">(<strong>CURR</strong>)</span></span><span
      style="line-height: 115%; color: rgb(87, 86, 86);">:</span></span></p>
<p class="MsoFooter" style="text-align: justify; line-height: 115%;"><span style="font-size: 10pt;"><strong><span
        style="line-height: 115%;">&nbsp;</span></strong></span></p>
<p style="text-align: justify; margin-bottom: 0cm;" align="center"><span class="normaltextrun"
    style="font-size: 10pt;"><strong><span
        style="line-height: 115%; color: rgb(80, 80, 80); border: 1pt none windowtext; padding: 0cm;">A N T E C E D E N
        T E S</span></strong></span></p>
<p style="text-align: justify; margin: 0cm 0cm 0cm 36pt; vertical-align: baseline;"><span style="font-size: 10pt;"><span
      style="line-height: 115%; color: rgb(87, 86, 86);">&nbsp;</span></span></p>
<p class="MsoListParagraphCxSpFirst"
  style="text-align: justify; margin-left: 21.3pt; text-indent: 21.3pt; line-height: 115%;"><span
    style="font-size: 10pt;"><!-- [if !supportLists]--><span style="line-height: 115%; color: rgb(87, 86, 86);">1.<span
        style="font-variant-numeric: normal; font-variant-east-asian: normal; font-variant-alternates: normal; font-kerning: auto; font-optical-sizing: auto; font-feature-settings: normal; font-variation-settings: normal; font-variant-position: normal; font-stretch: normal; line-height: normal;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </span></span><!--[endif]--><span style="line-height: 115%; color: rgb(87, 86, 86);">Que las actividades a que se
      dedica la<strong> </strong><span class="mce-annotation tox-comment"
        data-mce-annotation-uid="mce-conversation_78637541831711494948963"
        data-mce-annotation="tinycomments"><strong>EMPRESA</strong></span> corresponden para efectos de su
      evaluaci&oacute;n al Sector Hidrocarburos, las cuales son competencia de esta <strong>AGENCIA</strong> de
      conformidad con la definici&oacute;n se&ntilde;alada en el art&iacute;culo 3o. fracci&oacute;n XI de la Ley de la
      Agencia Nacional de Seguridad Industrial y de Protecci&oacute;n al Medio Ambiente del Sector
      Hidrocarburos</span><span style="line-height: 115%; color: rgb(87, 86, 86);">.</span></span></p>
<p class="MsoListParagraphCxSpMiddle"
  style="text-align: justify; margin-left: 21.3pt; line-height: 115%; vertical-align: baseline;"><span
    style="line-height: 115%; font-size: 10pt;">&nbsp;</span></p>
<p class="MsoListParagraphCxSpLast"
  style="text-align: justify; margin-left: 21.3pt; text-indent: 21.3pt; line-height: 115%; vertical-align: baseline;">
  <span style="font-size: 10pt;"><!-- [if !supportLists]--><span
      style="line-height: 115%; color: rgb(87, 86, 86);">2.<span
        style="font-variant-numeric: normal; font-variant-east-asian: normal; font-variant-alternates: normal; font-kerning: auto; font-optical-sizing: auto; font-feature-settings: normal; font-variation-settings: normal; font-variant-position: normal; font-stretch: normal; line-height: normal;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </span></span><!--[endif]--><span style="line-height: 115%; color: rgb(87, 86, 86);">El 13 mayo de 2016,
      la</span><span style="line-height: 115%; color: rgb(87, 86, 86);"> </span><strong><span
        style="line-height: 115%; color: rgb(87, 86, 86);">AGENCIA</span></strong><span
      style="line-height: 115%; color: rgb(87, 86, 86);">&nbsp;</span><span
      style="line-height: 115%; color: rgb(87, 86, 86);">public</span><span
      style="line-height: 115%; color: rgb(87, 86, 86);">&oacute;</span><span
      style="line-height: 115%; color: rgb(87, 86, 86);"> en el</span><span
      style="line-height: 115%; color: rgb(87, 86, 86);"> </span><span
      style="line-height: 115%; color: rgb(87, 86, 86);">Diario Oficial de la Federaci</span><span
      style="line-height: 115%; color: rgb(87, 86, 86);">&oacute;</span><span
      style="line-height: 115%; color: rgb(87, 86, 86);">n (<strong>DOF</strong>)</span><span
      style="line-height: 115%; color: rgb(87, 86, 86);"> </span><span
      style="line-height: 115%; color: rgb(87, 86, 86);">las</span><span
      style="line-height: 115%; color: rgb(87, 86, 86);"> </span><em><span
        style="line-height: 115%; color: rgb(87, 86, 86);">DISPOSICIONES administrativas de car&aacute;cter general que
        establecen los Lineamientos para la conformaci&oacute;n, implementaci&oacute;n y autorizaci&oacute;n de los
        Sistemas de Administraci&oacute;n de Seguridad Industrial, Seguridad Operativa y Protecci&oacute;n al Medio
        Ambiente aplicables a las</span></em><em><span
        style="line-height: 115%; color: rgb(87, 86, 86);">&nbsp;</span></em><em><span
        style="line-height: 115%; color: rgb(87, 86, 86);">actividades del Sector Hidrocarburos que se
        indican</span></em><span style="line-height: 115%; color: rgb(87, 86, 86);">,</span><span
      style="line-height: 115%; color: rgb(87, 86, 86);"> </span><span
      style="line-height: 115%; color: rgb(87, 86, 86);">mismas que fueron modificadas mediante ACUERDOS publicados en
      el</span><span style="line-height: 115%; color: rgb(87, 86, 86);"> </span><strong><span
        style="line-height: 115%; color: rgb(87, 86, 86);">DOF</span></strong><span
      style="line-height: 115%; color: rgb(87, 86, 86);"> </span><span
      style="line-height: 115%; color: rgb(87, 86, 86);">el 04 de julio de 2018 y el 04 de mayo de 2020.</span><span
      style="line-height: 115%; color: rgb(87, 86, 86);"> </span><span
      style="line-height: 115%; color: rgb(87, 86, 86);"> </span><span
      style="line-height: 115%; color: rgb(87, 86, 86);">&nbsp;</span></span></p>
<p style="text-align: justify; margin: 0cm 0cm 0cm 21pt; text-indent: 21pt; vertical-align: baseline;" align="left">
  <span style="font-size: 10pt;"><span style="line-height: 115%; color: rgb(87, 86, 86);"> </span><span
      style="line-height: 115%; color: rgb(87, 86, 86);">&nbsp;</span></span></p>
<p style="text-align: justify; margin: 0cm 0cm 0cm 21pt; vertical-align: baseline;"><span
    style="font-size: 10pt;"><em><span style="line-height: 115%; color: rgb(87, 86, 86);">ACUERDO por el cual se
        modifican y adicionan diversos art&iacute;culos de las Disposiciones administrativas de car&aacute;cter general
        que establecen los Lineamientos para la conformaci&oacute;n, implementaci&oacute;n y autorizaci&oacute;n de los
        Sistemas de Administraci&oacute;n de Seguridad Industrial, Seguridad Operativa y Protecci&oacute;n al Medio
        Ambiente aplicables a las actividades del Sector Hidrocarburos que se indican</span></em><span
      style="line-height: 115%; color: rgb(87, 86, 86);">, publicado en el</span><span
      style="line-height: 115%; color: rgb(87, 86, 86);"> </span><strong><span
        style="line-height: 115%; color: rgb(87, 86, 86);">DOF</span></strong><span
      style="line-height: 115%; color: rgb(87, 86, 86);"> </span><span
      style="line-height: 115%; color: rgb(87, 86, 86);">el 04 de julio de 2018.</span><span
      style="line-height: 115%; color: rgb(87, 86, 86);"> </span><span
      style="line-height: 115%; color: rgb(87, 86, 86);">&nbsp;</span></span></p>
<p style="text-align: justify; margin: 0cm 0cm 0cm 21pt; vertical-align: baseline;"><span style="font-size: 10pt;"><span
      style="line-height: 115%; color: rgb(87, 86, 86);"> </span><span
      style="line-height: 115%; color: rgb(87, 86, 86);">&nbsp;</span></span></p>
<p style="text-align: justify; margin: 0cm 0cm 0cm 21pt; vertical-align: baseline;"><span
    style="font-size: 10pt;"><em><span style="line-height: 115%; color: rgb(87, 86, 86);">ACUERDO por el cual se
        modifican, adicionan y derogan diversos art&iacute;culos de las Disposiciones administrativas de car&aacute;cter
        general que establecen los lineamientos para la conformaci&oacute;n, implementaci&oacute;n y autorizaci&oacute;n
        de los Sistemas de Administraci&oacute;n de Seguridad Industrial, Seguridad Operativa y Protecci&oacute;n al
        Medio Ambiente, aplicables a las actividades del Sector Hidrocarburos que se indican</span></em><span
      style="line-height: 115%; color: rgb(87, 86, 86);">, publicado en el</span><span
      style="line-height: 115%; color: rgb(87, 86, 86);"> </span><strong><span
        style="line-height: 115%; color: rgb(87, 86, 86);">DOF</span></strong><span
      style="line-height: 115%; color: rgb(87, 86, 86);"> </span><span
      style="line-height: 115%; color: rgb(87, 86, 86);">el 04 de mayo de 2020.</span><span
      style="line-height: 115%; color: rgb(87, 86, 86);"> </span><span
      style="line-height: 115%; color: rgb(87, 86, 86);">&nbsp;</span></span></p>
<p style="text-align: justify; margin: 0cm 0cm 0cm 21pt; vertical-align: baseline;"><span style="font-size: 10pt;"><span
      style="line-height: 115%; color: rgb(87, 86, 86);"> </span><span
      style="line-height: 115%; color: rgb(87, 86, 86);">&nbsp;</span></span></p>
<p style="text-align: justify; margin: 0cm 0cm 0cm 21pt; vertical-align: baseline;"><span style="font-size: 10pt;"><span
      style="line-height: 115%; color: rgb(87, 86, 86);">(<strong>Lineamientos</strong></span><strong><span
        style="line-height: 115%; color: rgb(87, 86, 86);"> </span></strong><strong><span
        style="line-height: 115%; color: rgb(87, 86, 86);">SASISOPA</span></strong><strong><span
        style="line-height: 115%; color: rgb(87, 86, 86);"> </span></strong><strong><span
        style="line-height: 115%; color: rgb(87, 86, 86);">Industrial</span></strong><span
      style="line-height: 115%; color: rgb(87, 86, 86);">)</span><span
      style="line-height: 115%; color: rgb(87, 86, 86);"> </span><span
      style="line-height: 115%; color: rgb(87, 86, 86);">&nbsp;</span></span></p>
<p style="text-align: justify; margin: 0cm 0cm 0cm 21pt; vertical-align: baseline;"><span
    style="line-height: 115%; color: rgb(87, 86, 86); font-size: 10pt;">&nbsp;</span></p>
<p class="MsoListParagraphCxSpFirst"
  style="text-align: justify; margin-left: 21.3pt; text-indent: 21.3pt; line-height: 115%;"><span
    style="font-size: 10pt;"><a name="_Hlk73124761"></a><!-- [if !supportLists]--><span
      style="line-height: 115%; color: rgb(87, 86, 86);">3.<span
        style="font-variant-numeric: normal; font-variant-east-asian: normal; font-variant-alternates: normal; font-kerning: auto; font-optical-sizing: auto; font-feature-settings: normal; font-variation-settings: normal; font-variant-position: normal; font-stretch: normal; line-height: normal;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </span></span><!--[endif]--><span style="line-height: 115%; color: rgb(87, 86, 86);">El 22 de junio de 2017, la
      <strong>AGENCIA</strong> public&oacute; en el <strong>DOF</strong> el<em> ACUERDO por el que se delega en las
        Direcciones Generales de Gesti&oacute;n de Exploraci&oacute;n y Extracci&oacute;n de Recursos Convencionales; de
        Gesti&oacute;n de Exploraci&oacute;n y Extracci&oacute;n de Recursos No Convencionales Mar&iacute;timos; de
        Gesti&oacute;n de Transporte y Almacenamiento; y de Gesti&oacute;n Comercial, de la Agencia Nacional de
        Seguridad Industrial y de Protecci&oacute;n al Medio Ambiente del Sector Hidrocarburos, la facultad que se
        indica</em></span><span style="line-height: 115%; color: rgb(87, 86, 86);">. </span></span></p>
<p class="MsoListParagraphCxSpMiddle"
  style="text-align: justify; margin-left: 21.3pt; text-indent: 21.3pt; line-height: 115%;"><span
    style="line-height: 115%; color: rgb(87, 86, 86); font-size: 10pt;">&nbsp;</span></p>
<p class="MsoListParagraphCxSpMiddle"
  style="text-align: justify; margin-left: 21.3pt; text-indent: 21.3pt; line-height: 115%;"><span
    style="font-size: 10pt;"><!-- [if !supportLists]--><span style="line-height: 115%; color: rgb(87, 86, 86);">4.<span
        style="font-variant-numeric: normal; font-variant-east-asian: normal; font-variant-alternates: normal; font-kerning: auto; font-optical-sizing: auto; font-feature-settings: normal; font-variation-settings: normal; font-variant-position: normal; font-stretch: normal; line-height: normal;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </span></span><!--[endif]--><span style="line-height: 115%; color: rgb(87, 86, 86);">El 30 de noviembre de 2017,
      la <strong>AGENCIA</strong> public&oacute; en el <strong>DOF</strong> el<em> ACUERDO por el que se delega en la
        Direcci&oacute;n General de Gesti&oacute;n de Procesos Industriales, las facultades que se
        indican.</em></span></span></p>
<p class="MsoListParagraphCxSpMiddle"
  style="text-align: justify; margin-left: 21.3pt; line-height: 115%; vertical-align: baseline;"><span
    class="normaltextrun" style="font-size: 10pt;"><strong><span
        style="line-height: 115%; color: rgb(87, 86, 86);">&nbsp;</span></strong></span></p>
<p class="MsoListParagraphCxSpMiddle"
  style="text-align: justify; margin-left: 21.3pt; text-indent: 21.3pt; line-height: 115%; vertical-align: baseline;">
  <span style="font-size: 10pt;"><!-- [if !supportLists]--><span class="eop"><span
        style="line-height: 115%; color: rgb(87, 86, 86);">5.<span
          style="font-variant-numeric: normal; font-variant-east-asian: normal; font-variant-alternates: normal; font-kerning: auto; font-optical-sizing: auto; font-feature-settings: normal; font-variation-settings: normal; font-variant-position: normal; font-stretch: normal; line-height: normal;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </span></span></span><!--[endif]--><span class="normaltextrun"><span
        style="line-height: 115%; color: rgb(87, 86, 86);">El</span></span><span class="normaltextrun"><span
        style="line-height: 115%; color: rgb(87, 86, 86);"> </span></span><span class="normaltextrun"><span
        style="line-height: 115%; color: rgb(87, 86, 86); background: yellow;">fecha de ingreso</span></span><span
      class="normaltextrun"><span style="line-height: 115%; color: rgb(87, 86, 86);">,</span></span><span
      style="line-height: 115%; color: rgb(87, 86, 86);"> mediante </span><span
      style="line-height: 115%; color: rgb(87, 86, 86);">la solicitud con n&uacute;mero de tr&aacute;mite <strong><span
          style="background: yellow; mso-highlight: yellow;">ASEA-00-021-XXXXXX-202X</span></strong></span><span
      class="normaltextrun"><span style="line-height: 115%; color: rgb(87, 86, 86);"> </span></span><span
      style="line-height: 115%; color: rgb(87, 86, 86);">presentado </span><span
      style="line-height: 115%; color: rgb(87, 86, 86);">a trav&eacute;s de la Oficial&iacute;a de Partes
      Electr&oacute;nica (<strong>OPE</strong>) de </span><span style="line-height: 115%; color: rgb(87, 86, 86);">esta
      <strong>AGENCIA</strong></span><span class="normaltextrun"><span
        style="line-height: 115%; color: rgb(87, 86, 86);">,</span></span><span class="normaltextrun"><span
        style="line-height: 115%; color: rgb(87, 86, 86);"> </span></span><span class="normaltextrun"><span
        style="line-height: 115%; color: rgb(87, 86, 86);">la</span></span><span class="normaltextrun"><span
        style="line-height: 115%; color: rgb(87, 86, 86);"> </span></span><span class="normaltextrun"><strong><span
          style="line-height: 115%; color: rgb(87, 86, 86);">EMPRESA</span></strong></span><span
      class="normaltextrun"><span style="line-height: 115%; color: rgb(87, 86, 86);"> </span></span><span
      class="normaltextrun"><span style="line-height: 115%; color: rgb(87, 86, 86);">present&oacute; la solicitud de
        Registro de su Sistema de Administraci&oacute;n y, en su caso,</span></span><span class="normaltextrun"><span
        style="line-height: 115%; color: rgb(87, 86, 86);"> </span></span><span class="normaltextrun"><span
        style="line-height: 115%; color: rgb(87, 86, 86);">asignaci</span></span><span class="normaltextrun"><span
        style="line-height: 115%; color: rgb(87, 86, 86);">&oacute;</span></span><span class="normaltextrun"><span
        style="line-height: 115%; color: rgb(87, 86, 86);">n de la</span></span><span class="normaltextrun"><span
        style="line-height: 115%; color: rgb(87, 86, 86);"> </span></span><span class="normaltextrun"><strong><span
          style="line-height: 115%; color: rgb(87, 86, 86);">CURR</span></strong></span><span
      class="normaltextrun"><span style="line-height: 115%; color: rgb(87, 86, 86);">; a trav&eacute;s del
        tr&aacute;mite con</span></span><span class="normaltextrun"><span
        style="line-height: 115%; color: rgb(87, 86, 86);"> </span></span><span class="normaltextrun"><span
        style="line-height: 115%; color: rgb(87, 86, 86);">Homoclave: ASEA-00-021, denominado:</span></span><span
      class="normaltextrun"><span style="line-height: 115%; color: rgb(87, 86, 86);"> </span></span><span
      class="normaltextrun"><em><span style="line-height: 115%; color: rgb(87, 86, 86);">Registro del Sistema de
          Administraci&oacute;n del Regulado (An&aacute;lisis de la solicitud y, en su caso, expedici&oacute;n de la
          Constancia de&nbsp;Conformaci&oacute;n&nbsp;del Sistema y asignaci&oacute;n de la Clave &Uacute;nica de
          Registro del Regulado (<strong>CURR</strong>))</span></em></span><span class="normaltextrun"><span
        style="line-height: 115%; color: rgb(87, 86, 86);">, en cumplimiento a los art&iacute;culos 7 y 8 de
        los</span></span><span class="normaltextrun"><span style="line-height: 115%; color: rgb(87, 86, 86);">
      </span></span><span class="normaltextrun"><strong><span
          style="line-height: 115%; color: rgb(87, 86, 86);">Lineamientos SASISOPA
          Industrial</span></strong></span><span class="normaltextrun"><span
        style="line-height: 115%; color: rgb(87, 86, 86);">.</span></span><span class="normaltextrun"><span
        style="line-height: 115%; color: rgb(87, 86, 86);"> </span></span><span class="eop"><span
        style="line-height: 115%; color: rgb(87, 86, 86);">&nbsp;</span></span></span></p>
<p class="MsoListParagraphCxSpMiddle"
  style="text-align: justify; margin-left: 21.3pt; line-height: 115%; vertical-align: baseline;"><span
    style="font-size: 10pt;"><strong><span
        style="line-height: 115%; color: rgb(87, 86, 86);">&nbsp;</span></strong></span></p>
<p class="MsoListParagraphCxSpMiddle"
  style="text-align: justify; margin-left: 21.3pt; text-indent: 21.3pt; line-height: 115%; vertical-align: baseline;">
  <span style="font-size: 10pt;"><!-- [if !supportLists]--><span class="eop"><span
        style="line-height: 115%; color: rgb(87, 86, 86);">6.<span
          style="font-variant-numeric: normal; font-variant-east-asian: normal; font-variant-alternates: normal; font-kerning: auto; font-optical-sizing: auto; font-feature-settings: normal; font-variation-settings: normal; font-variant-position: normal; font-stretch: normal; line-height: normal;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </span></span></span><!--[endif]--><span style="line-height: 115%; color: rgb(87, 86, 86);">El <span
        style="background: yellow; mso-highlight: yellow;">fecha de notificaci&oacute;n</span>, con oficio de
      prevenci&oacute;n </span><span style="line-height: 115%; color: rgb(87, 86, 86); border: none;">n&uacute;mero
    </span><span
      style="line-height: 115%; color: rgb(87, 86, 86); background: yellow;">ASEA/UGI/DGGXXX/XXXX/202X<strong>
      </strong></span><span style="line-height: 115%; color: rgb(87, 86, 86);">de fecha <span
        style="background: yellow; mso-highlight: yellow;">fecha del oficio</span></span><span
      style="line-height: 115%; color: rgb(87, 86, 86); border: none;">, la <strong>AGENCIA</strong> </span><span
      class="normaltextrun"><span style="line-height: 115%; color: rgb(87, 86, 86);">otorg&oacute; a
        la</span></span><span class="normaltextrun"><span style="line-height: 115%; color: rgb(87, 86, 86);">
      </span></span><span class="normaltextrun"><strong><span
          style="line-height: 115%; color: rgb(87, 86, 86);">EMPRESA</span></strong></span><span
      class="normaltextrun"><span style="line-height: 115%; color: rgb(87, 86, 86);"> </span></span><span
      class="normaltextrun"><span style="line-height: 115%; color: rgb(87, 86, 86);">un plazo de Diez (10) d&iacute;as
        h&aacute;biles,</span></span><span class="normaltextrun"><span
        style="line-height: 115%; color: rgb(87, 86, 86);"> </span></span><span class="normaltextrun"><span
        style="line-height: 115%; color: rgb(87, 86, 86);">para que</span></span><span class="normaltextrun"><span
        style="line-height: 115%; color: rgb(87, 86, 86);"> </span></span><span class="normaltextrun"><span
        style="line-height: 115%; color: rgb(87, 86, 86);">presentara</span></span><span class="normaltextrun"><span
        style="line-height: 115%; color: rgb(87, 86, 86);"> </span></span><span class="normaltextrun"><span
        style="line-height: 115%; color: rgb(87, 86, 86);">informaci</span></span><span class="normaltextrun"><span
        style="line-height: 115%; color: rgb(87, 86, 86);">&oacute;</span></span><span class="normaltextrun"><span
        style="line-height: 115%; color: rgb(87, 86, 86);">n y</span></span><span class="normaltextrun"><span
        style="line-height: 115%; color: rgb(87, 86, 86);"> </span></span><span class="normaltextrun"><span
        style="line-height: 115%; color: rgb(87, 86, 86);">documentaci</span></span><span class="normaltextrun"><span
        style="line-height: 115%; color: rgb(87, 86, 86);">&oacute;</span></span><span class="normaltextrun"><span
        style="line-height: 115%; color: rgb(87, 86, 86);">n</span></span><span class="normaltextrun"><span
        style="line-height: 115%; color: rgb(87, 86, 86);"> </span></span><span class="normaltextrun"><span
        style="line-height: 115%; color: rgb(87, 86, 86);">faltante</span></span><span class="normaltextrun"><span
        style="line-height: 115%; color: rgb(87, 86, 86);"> </span></span><span class="normaltextrun"><span
        style="line-height: 115%; color: rgb(87, 86, 86);">para</span></span><span class="normaltextrun"><span
        style="line-height: 115%; color: rgb(87, 86, 86);"> </span></span><span class="normaltextrun"><span
        style="line-height: 115%; color: rgb(87, 86, 86);">efectos de</span></span><span class="normaltextrun"><span
        style="line-height: 115%; color: rgb(87, 86, 86);"> </span></span><span class="normaltextrun"><span
        style="line-height: 115%; color: rgb(87, 86, 86);">resolver</span></span><span class="normaltextrun"><span
        style="line-height: 115%; color: rgb(87, 86, 86);"> </span></span><span class="normaltextrun"><span
        style="line-height: 115%; color: rgb(87, 86, 86);">el</span></span><span class="normaltextrun"><span
        style="line-height: 115%; color: rgb(87, 86, 86);"> </span></span><span class="normaltextrun"><span
        style="line-height: 115%; color: rgb(87, 86, 86);">tr</span></span><span class="normaltextrun"><span
        style="line-height: 115%; color: rgb(87, 86, 86);">&aacute;</span></span><span class="normaltextrun"><span
        style="line-height: 115%; color: rgb(87, 86, 86);">mite de solicitud de Registro de su Sistema de
        Administraci</span></span><span class="normaltextrun"><span
        style="line-height: 115%; color: rgb(87, 86, 86);">&oacute;</span></span><span class="normaltextrun"><span
        style="line-height: 115%; color: rgb(87, 86, 86);">n y, en su caso,</span></span><span
      class="normaltextrun"><span style="line-height: 115%; color: rgb(87, 86, 86);"> </span></span><span
      class="normaltextrun"><span style="line-height: 115%; color: rgb(87, 86, 86);">emisi</span></span><span
      class="normaltextrun"><span style="line-height: 115%; color: rgb(87, 86, 86);">&oacute;</span></span><span
      class="normaltextrun"><span style="line-height: 115%; color: rgb(87, 86, 86);">n de la</span></span><span
      class="normaltextrun"><span style="line-height: 115%; color: rgb(87, 86, 86);"> </span></span><span
      class="normaltextrun"><strong><span
          style="line-height: 115%; color: rgb(87, 86, 86);">CURR</span></strong></span><span
      class="normaltextrun"><span style="line-height: 115%; color: rgb(87, 86, 86);">; en t&eacute;rminos
        de</span></span><span class="normaltextrun"><span style="line-height: 115%; color: rgb(87, 86, 86);">
      </span></span><span class="normaltextrun"><span
        style="line-height: 115%; color: rgb(87, 86, 86);">los</span></span><span class="normaltextrun"><span
        style="line-height: 115%; color: rgb(87, 86, 86);"> </span></span><span class="normaltextrun"><span
        style="line-height: 115%; color: rgb(87, 86, 86);">art</span></span><span class="normaltextrun"><span
        style="line-height: 115%; color: rgb(87, 86, 86);">&iacute;</span></span><span class="normaltextrun"><span
        style="line-height: 115%; color: rgb(87, 86, 86);">culos 9 de los</span></span><span class="normaltextrun"><span
        style="line-height: 115%; color: rgb(87, 86, 86);"> </span></span><span class="normaltextrun"><strong><span
          style="line-height: 115%; color: rgb(87, 86, 86);">Lineamientos SASISOPA
          Industrial</span></strong></span><span class="normaltextrun"><span
        style="line-height: 115%; color: rgb(87, 86, 86);"> </span></span><span class="normaltextrun"><span
        style="line-height: 115%; color: rgb(87, 86, 86);">y</span></span><span class="normaltextrun"><span
        style="line-height: 115%; color: rgb(87, 86, 86);"> </span></span><span class="normaltextrun"><span
        style="line-height: 115%; color: rgb(87, 86, 86);">17-A de la</span></span><span class="normaltextrun"><span
        style="line-height: 115%; color: rgb(87, 86, 86);"> </span></span><span class="normaltextrun"><em><span
          style="line-height: 115%; color: rgb(87, 86, 86);">Ley Federal de Procedimiento
          Administrativo</span></em></span><span class="normaltextrun"><span
        style="line-height: 115%; color: rgb(87, 86, 86);"> </span></span><span class="normaltextrun"><span
        style="line-height: 115%; color: rgb(87, 86, 86);">(<strong>LFPA</strong>).</span></span><span
      class="normaltextrun"><span style="line-height: 115%; color: rgb(87, 86, 86);"> </span></span><span
      class="eop"><span style="line-height: 115%; color: rgb(87, 86, 86);">&nbsp;</span></span></span></p>
<p class="MsoListParagraphCxSpMiddle" style="text-align: justify; line-height: 115%;"><span
    style="line-height: 115%; color: rgb(87, 86, 86); font-size: 10pt;">&nbsp;</span></p>
<p class="MsoListParagraphCxSpLast"
  style="text-align: justify; margin-left: 21.3pt; text-indent: 21.3pt; line-height: 115%; vertical-align: baseline;">
  <span style="font-size: 10pt;"><!-- [if !supportLists]--><span
      style="line-height: 115%; color: rgb(87, 86, 86);">7.<span
        style="font-variant-numeric: normal; font-variant-east-asian: normal; font-variant-alternates: normal; font-kerning: auto; font-optical-sizing: auto; font-feature-settings: normal; font-variation-settings: normal; font-variant-position: normal; font-stretch: normal; line-height: normal;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </span></span><!--[endif]--><span class="normaltextrun"><span
        style="line-height: 115%; color: rgb(87, 86, 86);">El <span
          style="background: yellow; mso-highlight: yellow;">fecha de ingreso</span>, mediante escrito n&uacute;mero
        <span style="background: yellow; mso-highlight: yellow;">N&uacute;mero del escrito</span> de fecha <span
          style="background: yellow; mso-highlight: yellow;">fecha del escrito</span>, la</span></span><span
      class="normaltextrun"><span style="line-height: 115%; color: rgb(87, 86, 86);"> </span></span><span
      class="normaltextrun"><strong><span
          style="line-height: 115%; color: rgb(87, 86, 86);">EMPRESA</span></strong></span><span
      class="normaltextrun"><strong><span style="line-height: 115%; color: rgb(87, 86, 86);">
        </span></strong></span><span class="normaltextrun"><span
        style="line-height: 115%; color: rgb(87, 86, 86);">solicit&oacute;</span></span><span
      class="normaltextrun"><span style="line-height: 115%; color: rgb(87, 86, 86);"> </span></span><span
      class="normaltextrun"><span style="line-height: 115%; color: rgb(87, 86, 86);">ampliaci&oacute;n al
        plazo</span></span><span class="normaltextrun"><span style="line-height: 115%; color: rgb(87, 86, 86);">
      </span></span><span class="normaltextrun"><span
        style="line-height: 115%; color: rgb(87, 86, 86);">establecido</span></span><span class="normaltextrun"><span
        style="line-height: 115%; color: rgb(87, 86, 86);"> </span></span><span class="normaltextrun"><span
        style="line-height: 115%; color: rgb(87, 86, 86);">para</span></span><span class="normaltextrun"><span
        style="line-height: 115%; color: rgb(87, 86, 86);"> </span></span><span class="normaltextrun"><span
        style="line-height: 115%; color: rgb(87, 86, 86);">desahogar</span></span><span class="normaltextrun"><span
        style="line-height: 115%; color: rgb(87, 86, 86);"> </span></span><span class="normaltextrun"><span
        style="line-height: 115%; color: rgb(87, 86, 86);">la</span></span><span class="normaltextrun"><span
        style="line-height: 115%; color: rgb(87, 86, 86);"> </span></span><span class="normaltextrun"><span
        style="line-height: 115%; color: rgb(87, 86, 86);">prevenci&oacute;n</span></span><span
      class="normaltextrun"><span style="line-height: 115%; color: rgb(87, 86, 86);"> </span></span><span
      class="normaltextrun"><span style="line-height: 115%; color: rgb(87, 86, 86);">realizada con
        oficio</span></span><span class="normaltextrun"><span style="line-height: 115%; color: rgb(87, 86, 86);">
      </span></span><span class="normaltextrun"><span
        style="line-height: 115%; color: rgb(87, 86, 86);">ASEA/UGI/DGGXXX/XXXX/202X de fecha <span
          style="background: yellow; mso-highlight: yellow;">fecha del oficio</span>; y</span></span></span></p>
<p style="text-align: justify; margin-bottom: 0cm;" align="center"><span style="font-size: 10pt;"><strong><span
        style="line-height: 115%;">&nbsp;</span></strong></span></p>
<p style="text-align: justify; margin-bottom: 0cm;" align="center"><span class="normaltextrun"
    style="font-size: 10pt;"><strong><span
        style="line-height: 115%; color: rgb(80, 80, 80); border: 1pt none windowtext; padding: 0cm;">C O N S I D E R A
        N D O</span></strong></span></p>
<p style="text-align: justify; margin-bottom: 0cm;"><span
    style="line-height: 115%; background: yellow; font-size: 10pt;">&nbsp;</span></p>
<p class="MsoListParagraphCxSpFirst"
  style="text-align: justify; margin-left: 21.3pt; text-indent: 21.3pt; line-height: 115%;"><span
    style="font-size: 10pt;"><!-- [if !supportLists]--><strong><span
        style="line-height: 115%; color: rgb(87, 86, 86);">I.<span
          style="font-variant-numeric: normal; font-variant-east-asian: normal; font-variant-alternates: normal; font-kerning: auto; font-optical-sizing: auto; font-feature-settings: normal; font-variation-settings: normal; font-variant-position: normal; font-weight: normal; font-stretch: normal; line-height: normal;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </span></span></strong><!--[endif]--><span style="line-height: 115%; color: rgb(87, 86, 86);">Que de conformidad
      con el art&iacute;culo 31 de la Ley Federal del Procedimiento Administrativo es posible autorizar una
      ampliaci&oacute;n de plazos, sin que dicha ampliaci&oacute;n exceda de la mitad del plazo previsto originalmente,
      por lo que el plazo adicional m&aacute;ximo que le puede otorgar esta autoridad es de <strong>5 d&iacute;as
        h&aacute;biles</strong>.</span></span></p>
<p class="MsoListParagraphCxSpMiddle" style="text-align: justify; margin-left: 21.3pt; line-height: 115%;"><span
    style="line-height: 115%; color: rgb(87, 86, 86); font-size: 10pt;">&nbsp;</span></p>
<p class="MsoListParagraphCxSpMiddle"
  style="text-align: justify; margin-left: 21.3pt; text-indent: 21.3pt; line-height: 115%;"><span
    style="font-size: 10pt;"><!-- [if !supportLists]--><span class="eop"><strong><span
          style="line-height: 115%; color: rgb(87, 86, 86);">II.<span
            style="font-variant-numeric: normal; font-variant-east-asian: normal; font-variant-alternates: normal; font-kerning: auto; font-optical-sizing: auto; font-feature-settings: normal; font-variation-settings: normal; font-variant-position: normal; font-weight: normal; font-stretch: normal; line-height: normal;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </span></span></strong></span><!--[endif]--><span class="normaltextrun"><span
        style="line-height: 115%; color: rgb(87, 86, 86);">Que el&nbsp;<strong>C.&nbsp;</strong></span></span><span
      class="normaltextrun"><strong><span style="line-height: 115%; color: rgb(87, 86, 86); background: yellow;">Nombre
          del&nbsp;Representante/Apoderado Legal</span></strong></span><span class="normaltextrun"><span
        style="line-height: 115%; color: rgb(87, 86, 86);">, acredita ante esta&nbsp;<strong>AGENCIA</strong>&nbsp;su
        personalidad jur&iacute;dica como&nbsp;</span></span><span class="normaltextrun"><span
        style="line-height: 115%; color: rgb(87, 86, 86); background: yellow;">Representante/Apoderado</span></span><span
      class="normaltextrun"><span style="line-height: 115%; color: rgb(87, 86, 86);">&nbsp;Legal
        de&nbsp;la&nbsp;<strong>EMPRESA</strong>, mediante copia&nbsp;</span></span><span class="normaltextrun"><span
        style="line-height: 115%; color: rgb(87, 86, 86); background: yellow;">digital/certificada</span></span><span
      class="normaltextrun"><span style="line-height: 115%; color: rgb(87, 86, 86);">&nbsp;de la Escritura
        P&uacute;blica n&uacute;mero&nbsp;</span></span><span class="normaltextrun"><span
        style="line-height: 115%; color: rgb(87, 86, 86); background: yellow;">XX</span></span><span
      class="normaltextrun"><span style="line-height: 115%; color: rgb(87, 86, 86);">&nbsp;(</span></span><span
      class="normaltextrun"><span style="line-height: 115%; color: rgb(87, 86, 86); background: yellow;">n&uacute;mero
        con letra</span></span><span class="normaltextrun"><span style="line-height: 115%; color: rgb(87, 86, 86);">),
        de fecha&nbsp;</span></span><span class="normaltextrun"><span
        style="line-height: 115%; color: rgb(87, 86, 86); background: yellow;">fecha&nbsp;del
        documento</span></span><span class="normaltextrun"><span style="line-height: 115%; color: rgb(87, 86, 86);">,
        pasada ante la fe del Notario P&uacute;blico n&uacute;mero&nbsp;</span></span><span class="normaltextrun"><span
        style="line-height: 115%; color: rgb(87, 86, 86); background: yellow;">n&uacute;mero&nbsp;con
        letra</span></span><span class="normaltextrun"><span style="line-height: 115%; color: rgb(87, 86, 86);">&nbsp;de
        la&nbsp;</span></span><span class="normaltextrun"><span
        style="line-height: 115%; color: rgb(87, 86, 86); background: yellow;">Ciudad/Municipio/Estado</span></span><span
      class="normaltextrun"><span style="line-height: 115%; color: rgb(87, 86, 86);">.&nbsp;</span></span><span
      class="eop"><span style="line-height: 115%; color: rgb(87, 86, 86);">&nbsp;</span></span></span></p>
<p class="MsoListParagraphCxSpMiddle" style="text-align: justify;"><span
    style="color: rgb(87, 86, 86); font-size: 10pt;">&nbsp;</span></p>
<p class="MsoListParagraphCxSpMiddle"
  style="text-align: justify; margin-left: 21.3pt; text-indent: 21.3pt; line-height: 115%;"><span
    style="font-size: 10pt;"><!-- [if !supportLists]--><strong><span
        style="line-height: 115%; color: rgb(87, 86, 86);">III.<span
          style="font-variant-numeric: normal; font-variant-east-asian: normal; font-variant-alternates: normal; font-kerning: auto; font-optical-sizing: auto; font-feature-settings: normal; font-variation-settings: normal; font-variant-position: normal; font-weight: normal; font-stretch: normal; line-height: normal;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </span></span></strong><!--[endif]--><span style="line-height: 115%; color: rgb(87, 86, 86);">Que la
      <strong>EMPRESA</strong> se&ntilde;ala como medios para o&iacute;r y recibir notificaciones relacionadas con el
      <strong>presente tr&aacute;mite</strong> al domicilio ubicado en: <span
        style="background: yellow; mso-highlight: yellow;">XXX</span>.</span></span></p>
<p class="MsoListParagraphCxSpMiddle" style="text-align: justify; line-height: 115%;"><span
    style="line-height: 115%; font-size: 10pt;">&nbsp;</span></p>
<p class="MsoListParagraphCxSpLast" style="text-align: justify; line-height: 115%;"><span
    style="line-height: 115%; color: rgb(87, 86, 86); background: yellow; font-size: 10pt;">&nbsp;</span></p>
<p style="text-align: justify; margin-bottom: 0cm;"><span style="font-size: 10pt;"><span class="normaltextrun"><span
        style="line-height: 115%; color: rgb(87, 86, 86);">En virtud de lo anterior, y con fundamento en los
        art&iacute;culos&nbsp;1o, 2o, 3o fracci&oacute;n XI, 4o, 5o fracci&oacute;n XVII, y XXI, 12, 13 y 14 de la Ley
        de la Agencia Nacional de Seguridad Industrial y de Protecci&oacute;n al Medio Ambiente del Sector
        Hidrocarburos;&nbsp;1, 2, 8, 9 primer p&aacute;rrafo,&nbsp;17-A y 31 de la Ley Federal de Procedimiento
        Administrativo;&nbsp;1, 4 fracciones IV, XVIII y XIX, 12 fracciones III y X, 17, 18 fracciones III, XVIII y XX,
        28 fracci&oacute;n XX y 29 fracci&oacute;n XX&nbsp;&nbsp;del Reglamento Interior de la Agencia Nacional de
        Seguridad Industrial, Seguridad Operativa&nbsp;y de Protecci&oacute;n al Medio Ambiente del Sector
        Hidrocarburos;&nbsp;1, 2, 3 fracciones VII y IX, 7, 8 y 9 de las Disposiciones Administrativas de
        car&aacute;cter general que establecen los lineamientos para la conformaci&oacute;n, implementaci&oacute;n y
        autorizaci&oacute;n de los Sistemas de Administraci&oacute;n de Seguridad Industrial, Seguridad Operativa y
        Protecci&oacute;n al Medio Ambiente aplicables a las actividades del Sector Hidrocarburos que se indican, y sus
        modificaciones;&nbsp;1o y 3o del ACUERDO por el que se delegan las atribuciones que se mencionan, en la
        Direcci&oacute;n General de<strong>&nbsp;</strong>Gesti&oacute;n de Procesos Industriales, las facultades que se
        indican, publicado en el DOF el 30 de noviembre de 2017; PRIMERO del ACUERDO por el que se delega en las
        Direcciones Generales de Gesti&oacute;n de Exploraci&oacute;n y Extracci&oacute;n de Recursos Convencionales; de
        Gesti&oacute;n de Exploraci&oacute;n y Extracci&oacute;n de Recursos No Convencionales Mar&iacute;timos; de
        Gesti&oacute;n de Transporte y Almacenamiento; y de Gesti&oacute;n Comercial, de la Agencia Nacional de
        Seguridad Industrial y de Protecci&oacute;n al Medio Ambiente del Sector Hidrocarburos, la facultad que se
        indica;&nbsp;y dem&aacute;s que resulten aplicables, esta Direcci&oacute;n General</span></span><span
      style="line-height: 115%; color: rgb(87, 86, 86); border: none;">: </span></span></p>
<p style="text-align: justify; margin-bottom: 0cm;" align="center"><span style="font-size: 10pt;"><strong><span
        style="line-height: 115%;">&nbsp;</span></strong></span></p>
<p style="text-align: justify; margin-bottom: 0cm;" align="center"><span style="font-size: 10pt;"><strong><span
        style="line-height: 115%; color: rgb(87, 86, 86);">A C U E R D A</span></strong></span></p>
<p style="text-align: justify; margin-bottom: 0cm;" align="center"><span
    style="line-height: 115%; color: rgb(87, 86, 86); font-size: 10pt;">&nbsp;</span></p>
<p style="text-align: justify; margin-bottom: 0cm;"><span style="font-size: 10pt;"><strong><span
        style="line-height: 115%; color: rgb(87, 86, 86);">PRIMERO. &ndash;</span></strong><span
      style="line-height: 115%; color: rgb(87, 86, 86);"> Se <strong>OTORGA </strong>ampliaci&oacute;n al plazo
      <strong>POR &Uacute;NICA OCASI&Oacute;N por Cinco (5) d&iacute;as h&aacute;biles</strong> para entregar la
      informaci&oacute;n </span><span class="normaltextrun"><span style="line-height: 115%; color: rgb(87, 86, 86);">y
        documentaci&oacute;n</span></span><span class="normaltextrun"><span
        style="line-height: 115%; color: rgb(87, 86, 86);"> </span></span><span class="normaltextrun"><span
        style="line-height: 115%; color: rgb(87, 86, 86);">requerida</span></span><span class="normaltextrun"><span
        style="line-height: 115%; color: rgb(87, 86, 86);"> </span></span><span class="normaltextrun"><span
        style="line-height: 115%; color: rgb(87, 86, 86);">mediante oficio de prevenci&oacute;n</span></span><span
      class="normaltextrun"><span style="line-height: 115%; color: rgb(87, 86, 86);"> </span></span><span
      class="normaltextrun"><span style="line-height: 115%; color: rgb(87, 86, 86);">al tr</span></span><span
      class="normaltextrun"><span style="line-height: 115%; color: rgb(87, 86, 86);">&aacute;</span></span><span
      class="normaltextrun"><span style="line-height: 115%; color: rgb(87, 86, 86);">mite</span></span><span
      class="normaltextrun"><span style="line-height: 115%; color: rgb(87, 86, 86);"> </span></span><span
      class="normaltextrun"><span style="line-height: 115%; color: rgb(87, 86, 86);">solicitud</span></span><span
      class="normaltextrun"><span style="line-height: 115%; color: rgb(87, 86, 86);"> </span></span><span
      class="normaltextrun"><span style="line-height: 115%; color: rgb(87, 86, 86);">de</span></span><span
      class="normaltextrun"><span style="line-height: 115%; color: rgb(87, 86, 86);"> </span></span><span
      class="normaltextrun"><em><span style="line-height: 115%; color: rgb(87, 86, 86);">Registro del Sistema de
          Administraci&oacute;n del Regulado (An&aacute;lisis de la solicitud y, en su caso, expedici&oacute;n de la
          Constancia de Conformaci&oacute;n del Sistema y asignaci&oacute;n de la</span></em></span><span
      class="normaltextrun"><em><span style="line-height: 115%; color: rgb(87, 86, 86);"> </span></em></span><span
      class="normaltextrun"><strong><em><span
            style="line-height: 115%; color: rgb(87, 86, 86);">CURR</span></em></strong></span><span
      class="normaltextrun"><span style="line-height: 115%; color: rgb(87, 86, 86);">;</span></span><span
      class="normaltextrun"><span style="line-height: 115%; color: rgb(87, 86, 86);"> </span></span><span
      class="normaltextrun"><span style="line-height: 115%; color: rgb(87, 86, 86);">el cual empezar</span></span><span
      class="normaltextrun"><span style="line-height: 115%; color: rgb(87, 86, 86);">&aacute;</span></span><span
      class="normaltextrun"><span style="line-height: 115%; color: rgb(87, 86, 86);"> a correr a partir del
        d</span></span><span class="normaltextrun"><span
        style="line-height: 115%; color: rgb(87, 86, 86);">&iacute;</span></span><span class="normaltextrun"><span
        style="line-height: 115%; color: rgb(87, 86, 86);">a</span></span><span class="normaltextrun"><span
        style="line-height: 115%; color: rgb(87, 86, 86);"> </span></span><span class="normaltextrun"><span
        style="line-height: 115%; color: rgb(87, 86, 86);">siguiente de la notificaci&oacute;n del</span></span><span
      class="normaltextrun"><span style="line-height: 115%; color: rgb(87, 86, 86);"> </span></span><span
      class="normaltextrun"><strong><span style="line-height: 115%; color: rgb(87, 86, 86);">presente
          oficio</span></strong></span><span class="normaltextrun"><span
        style="line-height: 115%; color: rgb(87, 86, 86);">.</span></span><span class="normaltextrun"><span
        style="line-height: 115%; color: rgb(87, 86, 86);"> </span></span><span class="eop"><span
        style="line-height: 115%; color: rgb(87, 86, 86);">&nbsp;</span></span></span></p>
<p style="text-align: justify; margin-bottom: 0cm;"><span
    style="line-height: 115%; color: rgb(87, 86, 86); font-size: 10pt;">&nbsp;</span></p>
<p style="text-align: justify; margin-bottom: 0cm;"><span style="font-size: 10pt;"><span class="normaltextrun"><span
        style="line-height: 115%; color: rgb(87, 86, 86);">Lo</span></span><span class="normaltextrun"><span
        style="line-height: 115%; color: rgb(87, 86, 86);"> </span></span><span class="normaltextrun"><span
        style="line-height: 115%; color: rgb(87, 86, 86);">anterior toda vez que el plazo original para la entrega
        de</span></span><span class="normaltextrun"><span style="line-height: 115%; color: rgb(87, 86, 86);">
      </span></span><span class="normaltextrun"><span
        style="line-height: 115%; color: rgb(87, 86, 86);">la</span></span><span class="normaltextrun"><span
        style="line-height: 115%; color: rgb(87, 86, 86);"> </span></span><span class="normaltextrun"><span
        style="line-height: 115%; color: rgb(87, 86, 86);">informaci</span></span><span class="normaltextrun"><span
        style="line-height: 115%; color: rgb(87, 86, 86);">&oacute;</span></span><span class="normaltextrun"><span
        style="line-height: 115%; color: rgb(87, 86, 86);">n es de</span></span><span class="normaltextrun"><span
        style="line-height: 115%; color: rgb(87, 86, 86);"> </span></span><span class="normaltextrun"><span
        style="line-height: 115%; color: rgb(87, 86, 86);">Diez</span></span><span class="normaltextrun"><span
        style="line-height: 115%; color: rgb(87, 86, 86);"> </span></span><span class="normaltextrun"><span
        style="line-height: 115%; color: rgb(87, 86, 86);">(10)</span></span><span class="normaltextrun"><span
        style="line-height: 115%; color: rgb(87, 86, 86);"> </span></span><span class="normaltextrun"><span
        style="line-height: 115%; color: rgb(87, 86, 86);">d</span></span><span class="normaltextrun"><span
        style="line-height: 115%; color: rgb(87, 86, 86);">&iacute;</span></span><span class="normaltextrun"><span
        style="line-height: 115%; color: rgb(87, 86, 86);">as h</span></span><span class="normaltextrun"><span
        style="line-height: 115%; color: rgb(87, 86, 86);">&aacute;</span></span><span class="normaltextrun"><span
        style="line-height: 115%; color: rgb(87, 86, 86);">biles; por lo que, el plazo m</span></span><span
      class="normaltextrun"><span style="line-height: 115%; color: rgb(87, 86, 86);">&aacute;</span></span><span
      class="normaltextrun"><span style="line-height: 115%; color: rgb(87, 86, 86);">ximo que puede otorgar
        esta</span></span><span class="normaltextrun"><span style="line-height: 115%; color: rgb(87, 86, 86);">
      </span></span><span class="normaltextrun"><strong><span
          style="line-height: 115%; color: rgb(87, 86, 86);">AGENCIA</span></strong></span><span
      class="normaltextrun"><span style="line-height: 115%; color: rgb(87, 86, 86);"> </span></span><span
      class="normaltextrun"><span style="line-height: 115%; color: rgb(87, 86, 86);">es de</span></span><span
      class="normaltextrun"><span style="line-height: 115%; color: rgb(87, 86, 86);"> </span></span><span
      class="normaltextrun"><span style="line-height: 115%; color: rgb(87, 86, 86);">Cinco</span></span><span
      class="normaltextrun"><span style="line-height: 115%; color: rgb(87, 86, 86);"> </span></span><span
      class="normaltextrun"><span style="line-height: 115%; color: rgb(87, 86, 86);">(5)</span></span><span
      class="normaltextrun"><span style="line-height: 115%; color: rgb(87, 86, 86);"> </span></span><span
      class="normaltextrun"><span style="line-height: 115%; color: rgb(87, 86, 86);">d</span></span><span
      class="normaltextrun"><span style="line-height: 115%; color: rgb(87, 86, 86);">&iacute;</span></span><span
      class="normaltextrun"><span style="line-height: 115%; color: rgb(87, 86, 86);">as h</span></span><span
      class="normaltextrun"><span style="line-height: 115%; color: rgb(87, 86, 86);">&aacute;</span></span><span
      class="normaltextrun"><span style="line-height: 115%; color: rgb(87, 86, 86);">biles m</span></span><span
      class="normaltextrun"><span style="line-height: 115%; color: rgb(87, 86, 86);">&aacute;</span></span><span
      class="normaltextrun"><span style="line-height: 115%; color: rgb(87, 86, 86);">s, en virtud de lo dispuesto por el
        art&iacute;culo 31 de la</span></span><span class="normaltextrun"><span
        style="line-height: 115%; color: rgb(87, 86, 86);"> </span></span><span class="normaltextrun"><em><span
          style="line-height: 115%; color: rgb(87, 86, 86);">Ley Federal de Procedimiento
          Administrativo</span></em></span><span class="normaltextrun"><span
        style="line-height: 115%; color: rgb(87, 86, 86);">.</span></span></span></p>
<p style="text-align: justify; margin-bottom: 0cm;"><span
    style="line-height: 115%; color: rgb(87, 86, 86); font-size: 10pt;">&nbsp;</span></p>
<p style="text-align: justify; margin-bottom: 0cm;"><span style="font-size: 10pt;"><strong><span
        style="line-height: 115%; color: rgb(87, 86, 86);">SEGUNDO. -</span></strong><span
      style="line-height: 115%; color: rgb(87, 86, 86);"> El plazo para que esta Direcci&oacute;n General resuelva el
      tr&aacute;mite de m&eacute;rito queda suspendido y se reanudar&aacute; a partir del d&iacute;a h&aacute;bil
      inmediato siguiente a aqu&eacute;l en el que el interesado conteste. En caso de no presentar la informaci&oacute;n
      requerida en tiempo y forma, se desechar&aacute; el tr&aacute;mite en t&eacute;rminos de lo dispuesto en los
      art&iacute;culos 9 de los <strong>Lineamientos SASISOPA Industrial</strong> y 17-A de la Ley Federal de
      Procedimiento Administrativo. </span></span></p>
<p style="text-align: justify; margin-bottom: 0cm;"><span
    style="line-height: 115%; color: rgb(87, 86, 86); font-size: 10pt;">&nbsp;</span></p>
<p style="text-align: justify; margin-bottom: 0cm; border: none;"><span style="font-size: 10pt;"><span
      class="normaltextrun"><strong><span style="line-height: 115%; color: rgb(87, 86, 86);">TERCERO.
          -</span></strong></span><span class="normaltextrun"><span
        style="line-height: 115%; color: rgb(87, 86, 86);">&nbsp;Se tiene por acreditada la personalidad jur&iacute;dica
        del (la)&nbsp;<strong>C.&nbsp;</strong></span></span><span class="normaltextrun"><strong><span
          style="line-height: 115%; color: rgb(87, 86, 86); background: yellow;">Nombre del&nbsp;Representante/Apoderado
          Legal</span></strong></span><span class="normaltextrun"><span
        style="line-height: 115%; color: rgb(87, 86, 86);">&nbsp;como&nbsp;</span></span><span
      class="normaltextrun"><span
        style="line-height: 115%; color: rgb(87, 86, 86); background: yellow;">Representante/Apoderado</span></span><span
      class="normaltextrun"><span style="line-height: 115%; color: rgb(87, 86, 86);">&nbsp;Legal
        de&nbsp;la&nbsp;<strong>EMPRESA&nbsp;</strong>ante esta&nbsp;<strong>AGENCIA</strong>.&nbsp;</span></span><span
      class="eop"><span style="line-height: 115%; color: rgb(87, 86, 86);">&nbsp;</span></span></span></p>
<p style="text-align: justify; margin-bottom: 0cm; border: none;"><span class="eop" style="font-size: 10pt;"><span
      style="line-height: 115%; color: rgb(87, 86, 86);">&nbsp;</span></span></p>
<p style="text-align: justify; margin-bottom: 0cm; vertical-align: baseline;"><span
    style="font-size: 10pt;"><strong><span style="line-height: 115%; color: rgb(87, 86, 86);">CUARTO.
        -</span></strong><span style="line-height: 115%; color: rgb(87, 86, 86);">&nbsp;Se tiene por acreditada la
      personalidad jur&iacute;dica del (la)&nbsp;<strong>C.&nbsp;</strong></span><strong><span
        style="line-height: 115%; color: rgb(87, 86, 86); background: yellow;">Nombre del&nbsp;Representante/Apoderado
        Legal</span></strong><span style="line-height: 115%; color: rgb(87, 86, 86);">&nbsp;como&nbsp;</span><span
      style="line-height: 115%; color: rgb(87, 86, 86); background: yellow;">Representante/Apoderado</span><span
      style="line-height: 115%; color: rgb(87, 86, 86);">&nbsp;Legal de&nbsp;la&nbsp;<strong>EMPRESA&nbsp;</strong>ante
      esta&nbsp;<strong>AGENCIA</strong>.&nbsp;</span><span
      style="line-height: 115%; color: rgb(87, 86, 86);">&nbsp;</span></span></p>
<p style="text-align: justify; margin-bottom: 0cm;"><span
    style="line-height: 115%; color: rgb(87, 86, 86); font-size: 10pt;">&nbsp;</span></p>
<p style="text-align: justify; margin-bottom: 0cm; border: none;"><span style="font-size: 10pt;"><strong><span
        style="line-height: 115%; color: rgb(87, 86, 86);">QUINTO. -</span></strong><span
      style="line-height: 115%; color: rgb(87, 86, 86);"> </span><span
      style="line-height: 115%; color: rgb(87, 86, 86);">Notif&iacute;quese al <strong>C<span
          style="background: yellow; mso-highlight: yellow;">. </span></strong></span><strong><span
        style="line-height: 115%; color: rgb(87, 86, 86); background: yellow;">Nombre del Representante/Apoderado
        legal</span></strong><span style="line-height: 115%; color: rgb(87, 86, 86);">,</span><span
      style="line-height: 115%; color: rgb(87, 86, 86);"> </span><span
      style="line-height: 115%; color: rgb(87, 86, 86);">en su car&aacute;cter de</span><span
      style="line-height: 115%; color: rgb(87, 86, 86); background: yellow;"> representante/apoderado</span><span
      style="line-height: 115%; color: rgb(87, 86, 86);"> </span><span
      style="line-height: 115%; color: rgb(87, 86, 86);">legal de la<strong> EMPRESA</strong>, por alguno de los medios
      legales previstos por el art&iacute;culo 35 y dem&aacute;s aplicables de la Ley Federal de Procedimiento
      Administrativo</span><span style="line-height: 115%; color: black;">.</span></span></p>
<!--tinycomments|2.1|data:application/json;base64,eyJtY2UtY29udmVyc2F0aW9uXzQ5NzQwMDA1MDIxNzExNDk0ODc5ODM2Ijp7InVpZCI6Im1jZS1jb252ZXJzYXRpb25fNDk3NDAwMDUwMjE3MTE0OTQ4Nzk4MzYiLCJjb21tZW50cyI6W3sidWlkIjoibWNlLWNvbnZlcnNhdGlvbl80OTc0MDAwNTAyMTcxMTQ5NDg3OTgzNiIsImF1dGhvciI6IkF1dGhvciBuYW1lIiwiYXV0aG9yTmFtZSI6IkF1dGhvciBuYW1lIiwiY29udGVudCI6ImhvbGEgbXVuZG8iLCJjcmVhdGVkQXQiOiIyMDI0LTAzLTI2VDIzOjE0OjM5LjgzNloiLCJtb2RpZmllZEF0IjoiMjAyNC0wMy0yNlQyMzoxNDozOS44MzZaIn1dfSwibWNlLWNvbnZlcnNhdGlvbl83ODYzNzU0MTgzMTcxMTQ5NDk0ODk2MyI6eyJ1aWQiOiJtY2UtY29udmVyc2F0aW9uXzc4NjM3NTQxODMxNzExNDk0OTQ4OTYzIiwiY29tbWVudHMiOlt7InVpZCI6Im1jZS1jb252ZXJzYXRpb25fNzg2Mzc1NDE4MzE3MTE0OTQ5NDg5NjMiLCJhdXRob3IiOiJBdXRob3IgbmFtZSIsImF1dGhvck5hbWUiOiJBdXRob3IgbmFtZSIsImNvbnRlbnQiOiJIb2xhIG11bmRvIiwiY3JlYXRlZEF0IjoiMjAyNC0wMy0yNlQyMzoxNTo0OC45NjNaIiwibW9kaWZpZWRBdCI6IjIwMjQtMDMtMjZUMjM6MTU6NDguOTYzWiJ9XX19-->
  `;

  configInit = {
    plugins: 'lists link image table code help wordcount searchreplace preview autolink media template pagebreak nonbreaking insertdatetime advlist lists emoticons accordion',
    base_url: '/tinymce',
    suffix: '.min',
    toolbar: "undo redo | addcomment showcomments | accordion accordionremove | blocks fontfamily fontsize | bold italic underline strikethrough | align numlist bullist | link image | table media | lineheight outdent indent| forecolor backcolor removeformat | charmap emoticons | code fullscreen preview | save print | pagebreak anchor codesample | ltr rtl",
    image_title: true,
    /* enable automatic uploads of images represented by blob or data URIs*/
    automatic_uploads: true,
    /*
      URL of our upload handler (for more details check: https://www.tiny.cloud/docs/configure/file-image-upload/#images_upload_url)
      images_upload_url: 'postAcceptor.php',
      here we add custom filepicker only to Image dialog
    */
    file_picker_types: 'image',
    /* and here's our custom image picker*/
    file_picker_callback: (cb: any, value: any, meta: any) => {
      const input = document.createElement('input');
      input.setAttribute('type', 'file');
      input.setAttribute('accept', 'image/*');

      input.addEventListener('change', (e: any) => {
        const file = e.target.files[0];

        const reader = new FileReader();
        reader.addEventListener('load', () => {
          /*
            Note: Now we need to register the blob in TinyMCEs image blob
            registry. In the next release this part hopefully won't be
            necessary, as we are looking to handle it internally.
          */
          const id = 'blobid' + (new Date()).getTime();
          const blobCache = tinymce.activeEditor!.editorUpload.blobCache;
          const base64 = (reader.result! as string).split(',')[1];
          const blobInfo = blobCache.create(id, file, base64);
          blobCache.add(blobInfo);

          /* call the callback and populate the Title field with the file name */
          cb(blobInfo.blobUri(), { title: file.name });
        });
        reader.readAsDataURL(file);
      });

      input.click();
    },
    tinycomments_mode: 'embedded',
    tinycomments_author: this.currentAuthor,
    tinycomments_can_resolve: (req: any, done: any, fail: any) => {
      var allowed = req.comments.length > 0 &&
        req.comments[0].author === this.currentAuthor;
      done({
        canResolve: allowed || this.currentAuthor === this.userAllowedToResolve
      });
    },
    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
    /* The following setup callback opens the comments sidebar when the editor loads */
    setup: (editor: any) => {
      editor.on('SkinLoaded', function () {
        editor.execCommand("ToggleSidebar", false, "showcomments", { skip_focus: true });
      })
    },
    ai_request: (request: any, respondWith: any) => respondWith.string(() => Promise.reject("See docs to implement AI Assistant")),
  }


  configWithKey: any = {
    plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage advtemplate ai mentions tinycomments tableofcontents footnotes mergetags autocorrect typography inlinecss',
    toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
    tinycomments_mode: 'embedded',
    tinycomments_author: 'Author name',
    mergetags_list: [
      { value: 'First.Name', title: 'First Name' },
      { value: 'Email', title: 'Email' },
    ],
    ai_request: (request: any, respondWith: any) => respondWith.string(() => Promise.reject("See docs to implement AI Assistant")),
  }


  constructor() {


  }

  ngOnInit(): void {
  }

  testPdf() {
    return new Promise((resolve, reject) => {
      console.log(this.data);
      let htmlContent = this.limpiarEstilos(this.data);

      const htmlContentLimpio = htmlToPdfmake(this.data);
      // htmlContentLimpio = this.limpiarEstilos(htmlContentLimpio);
      console.log(htmlContentLimpio);
      let imgEncabezado: {};
      const documentDefinition = {
        content: [
          { text: 'PDF generado desde Angular con pdfMake', style: 'header' },
          //Cuerpo
          {
            table: {
              widths: ['100%'],
              body: [
                [
                  {
                    table: {
                      widths: ['*'],
                      body: [
                        //Datos de asunto
                        // [{ text: html1, style: 'asunto' }],
                        //Datos generales
                        // [{ text: html2, style: 'datosGenerales' }],
                        //Datos del componente editor
                        [{ stack: htmlContentLimpio }],
                        //firma doc
                        // [{ text: html3, style: 'firma' }],
                        //nota
                        // [{ text: html4, style: 'contenido' }],
                        //Datos generales
                        // [{ stack: html5 }],
                        //Firma electronica
                        // [{ text: html6, style: 'contenido' }],
                      ],
                    },
                    //Quitar border de tabla
                    layout: 'noBorders',
                  },
                ],
              ],
            },

            layout: 'noBorders',
          },
        ],
        styles: {
          header: {
            fontSize: 18,
            bold: true
          },
          content: {
            fontSize: 14
          }
        }
      };

      const pdfDoc = pdfMakeX.createPdf(documentDefinition as any);
      console.log(pdfDoc);

      pdfDoc.open();

      pdfDoc.getBlob((blob: any) => {
        const reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onloadend = () => {
          console.log(reader.result);
          // El resultado es la representación base64 del PDF
          let base64String: any = reader.result;
          base64String = base64String?.split('data:application/pdf;base64,')
          // Imprimir o utilizar la cadena base64 según sea necesario
          console.log(base64String[1]);
          resolve(base64String[1])
        };
      })
    });
  }

  generatePdfFromHtml() {
    console.log(this.data);

    // const figures = this.data.match(/<figure[^>]*>/ig);
    // console.log(figures);

    const documentDefinition: any = {
      content: htmlToPdfmake(this.data) // Convertimos HTML a objetos de definición de documento
    };
    // delete documentDefinition[0].stack[0].height;
    console.log(documentDefinition);
    // let figureIndex = 0;
    // documentDefinition.content.forEach((element: any) => {
    //   if(element.nodeName == "FIGURE" && element.stack[0].nodeName == 'IMG'){
    //     const x = figures![figureIndex].match(/width:(d+(.d+)?)%/)!;
    //     const prcentaje = parseFloat(x[1]);
    //     element.stack[0].width = element.stack[0].width * prcentaje / 100;
    //     element.stack[0].height = element.stack[0].height * prcentaje / 100;
    //     figureIndex++;
    //   }
    // });
    const pdfDoc = pdfMakeX.createPdf(documentDefinition as any);
    pdfDoc.open();
    pdfDoc.getBlob((blob: any) => {
      const reader = new FileReader();
      reader.readAsDataURL(blob);
      reader.onloadend = () => {
        console.log(reader.result);
        // El resultado es la representación base64 del PDF
        let base64String: any = reader.result;
        base64String = base64String?.split('data:application/pdf;base64,')
        // Imprimir o utilizar la cadena base64 según sea necesario
        console.log(base64String[1]);
      };
    })
  }

  limpiarEstilos(text: string) {
    console.log(text);
    console.log('limpiarEstilos');
    text = text.replaceAll('class="MsoNormal"', '');
    text = text.replaceAll(' ', ' ');
    text = text.replaceAll(':-', ':');
    text = text.replace('<b>', '<strong>');
    text = text.replace('</b>', '</strong>');
    text = text.replace('x-small', '1');
    let fontFamilyScan = text.split('&quot;')
    let textLimpio1 = ""

    if (fontFamilyScan.length != 0) {
      for (let element of fontFamilyScan) {
        textLimpio1 = textLimpio1 + element;
      }
      text = textLimpio1
    }
    const regex = /font-family:s*([^;]+);/gi;
    const nuevaFuente = 'Montserrat'; // Reemplaza con la fuente
    let nuevaHtmlString = text.replace(regex, (match, fontValue) => {
      return `font-family: ${nuevaFuente};`; // Sustituye con la nueva fuente
    });

    const regexNeg = /(-d+(.d+)?)/g;

    const nuevaHtmlString1 = (match: string) => {
      const valorNegativo = parseFloat(match);
      const valorPositivo = Math.abs(valorNegativo);
      return valorPositivo.toString();
    };

    nuevaHtmlString = nuevaHtmlString.replace(regexNeg, nuevaHtmlString1);
    return nuevaHtmlString;
  }
}

