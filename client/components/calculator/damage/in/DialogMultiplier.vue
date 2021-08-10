<template>
  <v-dialog transition="dialog-bottom-transition" max-width="600">
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        color="#d3bc8e"
        class="black--text font-weight-bold"
        block
        v-bind="attrs"
        v-on="on"
        >Show DMG Multipliers</v-btn
      >
    </template>
    <template v-slot:default="dialog">
      <v-card dark color="#33333e">
        <v-toolbar color="#d3bc8e" class="black--text font-weight-bold" dark
          >DMG Multipliers</v-toolbar
        >
        <v-card-text class="pt-5 pb-0">
          <v-simple-table>
            <template v-slot:default>
              <thead style="background: #33333e" class="rounded-lg">
                <tr>
                  <th class="text-left">
                    Multiplier
                  </th>
                  <th class="text-left">
                    Normall Attack
                  </th>
                  <th class="text-left">
                    Charged Attack
                  </th>
                  <th class="text-left">
                    Plunging Attack
                  </th>
                  <th class="text-left">
                    ELemental Skill
                  </th>
                  <th class="text-left">
                    Elemental Burst
                  </th>
                </tr>
              </thead>
              <tbody style="background: #33333e">
                <tr>
                  <td>Output DMG</td>
                  <td>{{ DMGMulti.normallDMG * 100 }}%</td>
                  <td>{{ DMGMulti.chargedDMG * 100 }}%</td>
                  <td>{{ DMGMulti.plungingDMG * 100 }}%</td>
                  <td>{{ DMGMulti.elementalSkillDMG * 100 }}%</td>
                  <td>{{ DMGMulti.elementalBurstDMG * 100 }}%</td>
                </tr>
                <tr>
                  <td>Input DMG</td>
                  <td>{{ DMGMultiWithDEF.normallDMG * 100 }}%</td>
                  <td>{{ DMGMultiWithDEF.chargedDMG * 100 }}%</td>
                  <td>{{ DMGMultiWithDEF.plungingDMG * 100 }}%</td>
                  <td>{{ DMGMultiWithDEF.elementalSkillDMG * 100 }}%</td>
                  <td>{{ DMGMultiWithDEF.elementalBurstDMG * 100 }}%</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
          <v-card color="#33333e" tile elevation="0">
            <v-card-title class="pb-0"
              >Monster DEF: {{ monsterDEF }}%</v-card-title
            >
            <v-card-text>Input DMG = Output DMG * Monster DEF</v-card-text>
          </v-card>
        </v-card-text>
        <v-card-actions class="justify-end">
          <v-btn text @click="dialog.value = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>

<script>
export default {
  props: ["DMGMulti", "DMGMultiWithDEF", "monsterDEF"]
};
</script>
